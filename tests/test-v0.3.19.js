const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert/strict");

const calls = [];
global.Widget = {
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
  assert.deepEqual(result, name.startsWith("detail:") ? null : []);
  assert.equal(calls.length, 0, name + " must not send a network request");
}

(async () => {
  assert.equal(WidgetMetadata.version, "0.3.19");

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

  console.log("v0.3.19 source isolation and stable identity tests passed");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
