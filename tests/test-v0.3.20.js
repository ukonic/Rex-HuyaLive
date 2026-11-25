const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert/strict");

const calls = [];
const storage = new Map();
global.Widget = {
  storage,
  http: {
    get: async (url) => {
      calls.push(url);
      throw new Error("unexpected network request: " + url);
    },
    post: async (url) => {
      calls.push(url);
      throw new Error("unexpected network request: " + url);
    },
  },
};

const modulePath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, "..", "Rex-Huya-Live.js");
vm.runInThisContext(fs.readFileSync(modulePath, "utf8"), { filename: modulePath });

async function assertRejectedWithoutRequest(name, params, handler) {
  calls.length = 0;
  const result = await handler(params);
  assert.deepEqual(result, []);
  assert.equal(calls.length, 0, name + " must not send a network request");
}

(async () => {
  assert.equal(WidgetMetadata.id, "com.local.rex.huya.live.test");

  const invalidInputs = [
    550,
    "tt0137523",
    "https://evil.test/1995",
    "https://www.huya.com.evil.test/1995",
    "https://evil.test/?next=https://www.huya.com/1995",
  ];
  for (const input of invalidInputs) {
    await assertRejectedWithoutRequest("detail:" + input, input, loadDetail);
    await assertRejectedWithoutRequest("resource:" + input, { id: input }, loadResource);
  }

  await assertRejectedWithoutRequest(
    "resource:invalid-link-wins",
    { link: "https://evil.test/404", id: "https://www.huya.com/1995" },
    loadResource
  );

  const category = huyaCategoryCard({ id: "1", name: "英雄联盟", group: "网游竞技" });
  const message = huyaMessageCard("提示", "说明", "test");
  assert.equal(category.playerType, undefined);
  assert.equal(message.playerType, undefined);
  assert.deepEqual(await loadResource({ link: category.link }), []);
  assert.deepEqual(await loadResource({ link: message.link }), []);
  assert.equal(calls.length, 0);

  const live = huyaItem({ roomId: "1995", title: "直播标题", nick: "主播", isLive: true });
  const offlineA = huyaOfflineSearchItem({
    room_id: "1995",
    game_nick: "主播",
    game_avatarUrl180: "https://img.example/a.jpg",
    live_intro: "标题 A",
    gameLiveOn: false,
  });
  const offlineB = huyaOfflineSearchItem({
    room_id: "1995",
    game_nick: "主播",
    game_avatarUrl180: "https://img.example/b.jpg",
    live_intro: "标题 B",
    gameLiveOn: false,
  });
  assert.equal(live.id, offlineA.id);
  assert.equal(offlineA.id, offlineB.id);
  assert.notEqual(offlineA.link, offlineB.link);

  assert.equal(huyaOwnedRoute("https://www.huya.com/1995").roomId, "1995");
  assert.equal(huyaOwnedRoute("https://www.huya.com/g/1").kind, "category");
  assert.equal(huyaOwnedRoute(message.link).kind, "message");
  assert.equal(huyaOwnedRoute("https://evil.test/1995"), null);

  const entries = Array.from({ length: 25 }, (_, i) => ({
    gid: String(i + 1),
    gameFullName: "测试分类 " + (i + 1),
  }));
  Widget.http.get = async (url) => {
    calls.push(url);
    return { data: { data: entries } };
  };
  const first = await loadHuyaCategoryByName({ categoryName: "测试分类" });
  const second = await loadHuyaCategoryByName({ categoryName: "测试分类", page: "2" });
  assert.equal(first.length, 20);
  assert.equal(second.length, 5);
  assert.equal(first.some((item) => second.some((other) => other.id === item.id)), false);
  assert.deepEqual(await loadHuyaCategoryByName({ categoryName: "测试分类", page: "3" }), []);
  assert.equal((await loadHuyaCategoryByName({ categoryName: "测试分类", page: "2", count: "3" }))[0].id,
    first[3].id);
  assert.equal(calls.length, 4);
  HUYA_CATEGORY_CACHE = { items: [], expiresAt: 0 };
  assert.deepEqual(await loadHuyaCategoryByName({ categoryName: "测试分类" }), first);
  assert.equal(calls.length, 4);

  huyaRoomSnapshot = async () => {
    const error = huyaOfflineError("1995");
    error.roomData = { nick: "测试主播" };
    throw error;
  };
  const offlineRooms = await searchHuyaRooms({ roomId: "1995" });
  assert.equal(offlineRooms.length, 1);
  assert.equal(offlineRooms[0].id, live.id);
  assert.equal(offlineRooms[0].title, "【未开播】测试主播");
  assert.equal((await loadDetail(offlineRooms[0].link)).id, live.id);
  assert.deepEqual(await searchHuyaRooms({ roomId: "1995", includeOffline: "0" }), []);
  assert.deepEqual(await loadHuyaRoomById({ roomId: "1995" }), []);
  await assert.rejects(loadResource({ link: offlineRooms[0].link }), { code: "HUYA_OFFLINE" });

  console.log("v0.3.20 routing, room identity, category pagination, cache and offline search tests passed");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
