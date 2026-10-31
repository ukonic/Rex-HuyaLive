/* WidgetMetadata {
  "id": "com.local.rex.huya.live.test",
  "title": "虎牙直播 v0.3.17",
  "version": "0.3.17",
  "author": "ukonic"
} */

var WidgetMetadata = {
  id: "com.local.rex.huya.live.test",
  title: "虎牙直播 v0.3.17",
  description: "在 Rex 中浏览、搜索和播放虎牙直播，提供分类导航、房间状态识别和多线路播放能力。",
  author: "ukonic",
  version: "0.3.17",
  requiredVersion: "0.0.1",
  detailCacheDuration: 0,
  modules: [
    {
      id: "huyaRecommend",
      title: "虎牙推荐直播",
      functionName: "loadHuyaRecommend",
      cacheDuration: 30,
      params: [
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaCategory",
      title: "虎牙热门分类",
      description: "常用游戏与娱乐直播的快捷入口",
      functionName: "loadHuyaCategory",
      cacheDuration: 30,
      params: [
        {
          name: "gameId",
          title: "直播分类",
          type: "enumeration",
          value: "1",
          enumOptions: [
            { title: "英雄联盟", value: "1" },
            { title: "CS2", value: "862" },
            { title: "无畏契约", value: "5937" },
            { title: "云顶之弈", value: "5485" },
            { title: "王者荣耀", value: "2336" },
            { title: "三角洲行动", value: "9449" },
            { title: "和平精英", value: "3203" },
            { title: "金铲铲之战", value: "7185" },
            { title: "天天吃鸡", value: "2793" },
            { title: "永劫无间", value: "6219" },
            { title: "户外", value: "2165" },
            { title: "星秀", value: "1663" },
            { title: "一起看", value: "2135" },
            { title: "体育", value: "2356" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaOnlineGames",
      title: "网游竞技",
      description: "电脑网络游戏与电竞分区",
      functionName: "loadHuyaCategory",
      cacheDuration: 30,
      params: [
        {
          name: "gameId",
          title: "网游分类",
          type: "enumeration",
          value: "1",
          enumOptions: [
            { title: "英雄联盟", value: "1" },
            { title: "CS2", value: "862" },
            { title: "无畏契约", value: "5937" },
            { title: "云顶之弈", value: "5485" },
            { title: "炉石传说", value: "393" },
            { title: "穿越火线", value: "4" },
            { title: "DOTA2", value: "7" },
            { title: "魔兽世界", value: "8" },
            { title: "DOTA1", value: "6" },
            { title: "坦克世界", value: "802" },
            { title: "网游竞技", value: "100023" },
            { title: "暴雪专区", value: "100043" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaStandaloneGames",
      title: "单机游戏",
      description: "单机、主机、沙盒与生存游戏分区",
      functionName: "loadHuyaCategory",
      cacheDuration: 30,
      params: [
        {
          name: "gameId",
          title: "单机分类",
          type: "enumeration",
          value: "2793",
          enumOptions: [
            { title: "天天吃鸡", value: "2793" },
            { title: "主机游戏", value: "100032" },
            { title: "我的世界", value: "1732" },
            { title: "RUST", value: "70953" },
            { title: "植物大战僵尸", value: "485" },
            { title: "部落：上升", value: "1318" },
            { title: "互动点播", value: "5907" },
            { title: "单机热游", value: "100002" },
            { title: "影之刃零", value: "80999" },
            { title: "永劫无间", value: "6219" },
            { title: "方舟", value: "1997" },
            { title: "罗布乐思", value: "5771" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaMobileGames",
      title: "手机游戏",
      description: "热门手游与休闲手游分区",
      functionName: "loadHuyaCategory",
      cacheDuration: 30,
      params: [
        {
          name: "gameId",
          title: "手游分类",
          type: "enumeration",
          value: "2336",
          enumOptions: [
            { title: "王者荣耀", value: "2336" },
            { title: "三角洲行动", value: "9449" },
            { title: "和平精英", value: "3203" },
            { title: "金铲铲之战", value: "7185" },
            { title: "QQ飞车手游", value: "2928" },
            { title: "COD手游", value: "4769" },
            { title: "火影忍者手游", value: "2429" },
            { title: "蛋仔派对", value: "6909" },
            { title: "王者万象棋", value: "8127" },
            { title: "手游休闲", value: "100004" },
            { title: "摸了个鱼", value: "9283" },
            { title: "新游广场", value: "100052" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaEntertainment",
      title: "娱乐生活",
      description: "户外、才艺、体育、一起看与社交娱乐分区",
      functionName: "loadHuyaCategory",
      cacheDuration: 30,
      params: [
        {
          name: "gameId",
          title: "娱乐分类",
          type: "enumeration",
          value: "2165",
          enumOptions: [
            { title: "户外", value: "2165" },
            { title: "星秀", value: "1663" },
            { title: "原创", value: "6861" },
            { title: "体育", value: "2356" },
            { title: "一起看", value: "2135" },
            { title: "交友", value: "4079" },
            { title: "二次元", value: "2633" },
            { title: "颜值", value: "2168" },
            { title: "娱乐综合", value: "100022" },
            { title: "吃喝玩乐", value: "100044" },
            { title: "一起玩", value: "6613" },
            { title: "互动组队", value: "5367" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaCategoryByName",
      title: "按名称查找分类",
      description: "不知道游戏 ID 时，输入分类中文名称直接打开",
      functionName: "loadHuyaCategoryByName",
      cacheDuration: 30,
      params: [
        {
          name: "categoryName",
          title: "分类名称",
          type: "input",
          description: "例如：一起看、王者荣耀、英雄联盟",
          value: "一起看"
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "huyaRoom",
      title: "指定虎牙房间",
      functionName: "loadHuyaRoomById",
      cacheDuration: 15,
      params: [
        {
          name: "roomId",
          title: "房间号或房间链接",
          type: "input",
          description: "例如 1995 或 https://www.huya.com/1995（须选择正在直播的房间）",
          value: "1995"
        }
      ]
    },
    {
      id: "huyaCustomCategory",
      title: "自定义游戏 ID",
      description: "填写虎牙分类网址 /g/ 后面的数字；可从快捷对照中选择",
      functionName: "loadHuyaCategory",
      cacheDuration: 30,
      params: [
        {
          name: "gameId",
          title: "虎牙游戏 ID",
          type: "input",
          description: "例如 https://www.huya.com/g/2135 中的 2135",
          value: "2135",
          placeholders: [
            { title: "英雄联盟 · 1", value: "1" },
            { title: "CS2 · 862", value: "862" },
            { title: "无畏契约 · 5937", value: "5937" },
            { title: "王者荣耀 · 2336", value: "2336" },
            { title: "三角洲行动 · 9449", value: "9449" },
            { title: "和平精英 · 3203", value: "3203" },
            { title: "永劫无间 · 6219", value: "6219" },
            { title: "户外 · 2165", value: "2165" },
            { title: "星秀 · 1663", value: "1663" },
            { title: "一起看 · 2135", value: "2135" },
            { title: "二次元 · 2633", value: "2633" },
            { title: "体育 · 2356", value: "2356" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "loadResource",
      title: "加载虎牙播放线路",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: []
    }
  ],
  search: {
    title: "搜索虎牙直播",
    functionName: "searchHuyaRooms",
    params: [
      {
        name: "keyword",
        title: "关键词或主播名",
        type: "input",
        description: "例如：英雄联盟、王者荣耀、主播昵称"
      },
      {
        name: "roomId",
        title: "房间号（可选）",
        type: "input",
        description: "填写后优先打开该房间，也支持完整虎牙房间链接",
        value: ""
      },
      {
        name: "includeOffline",
        title: "包含未开播主播",
        type: "enumeration",
        description: "未开播主播仅显示在搜索结果末尾，不会进入推荐、分类或相关直播",
        value: "1",
        enumOptions: [
          { title: "是", value: "1" },
          { title: "否", value: "0" }
        ]
      },
      { name: "page", title: "页码", type: "page" },
      { name: "count", title: "每页数量", type: "count", value: "30" }
    ]
  }
};

var HUYA_BASE = "https://www.huya.com";
var HUYA_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
var HUYA_UID_CACHE = { uid: 0, expiresAt: 0 };
var HUYA_CATEGORY_CACHE = { items: [], expiresAt: 0 };
var HUYA_GAME_NAMES = {
  "1": "英雄联盟", "862": "CS2", "5937": "无畏契约", "5485": "云顶之弈",
  "393": "炉石传说", "4": "穿越火线", "7": "DOTA2", "8": "魔兽世界",
  "6": "DOTA1", "802": "坦克世界", "100023": "网游竞技", "100043": "暴雪专区",
  "2336": "王者荣耀", "9449": "三角洲行动", "3203": "和平精英", "7185": "金铲铲之战",
  "2928": "QQ飞车手游", "4769": "COD手游", "2429": "火影忍者手游", "6909": "蛋仔派对",
  "8127": "王者万象棋", "100004": "手游休闲", "9283": "摸了个鱼", "100052": "新游广场",
  "2793": "天天吃鸡", "100032": "主机游戏", "1732": "我的世界", "70953": "RUST",
  "485": "植物大战僵尸", "1318": "部落：上升", "5907": "互动点播", "100002": "单机热游",
  "80999": "影之刃零", "6219": "永劫无间", "1997": "方舟", "5771": "罗布乐思",
  "2165": "户外", "1663": "星秀", "6861": "原创", "2356": "体育",
  "2135": "一起看", "4079": "交友", "2633": "二次元", "2168": "颜值",
  "100022": "娱乐综合", "100044": "吃喝玩乐", "6613": "一起玩", "5367": "互动组队"
};

function huyaText(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function huyaHeaders(roomId) {
  return {
    "User-Agent": HUYA_UA,
    Origin: HUYA_BASE,
    Referer: HUYA_BASE + "/" + (roomId || "")
  };
}

function huyaJson(value) {
  if (typeof value === "string") return JSON.parse(value);
  return value || {};
}

function huyaHttps(value) {
  var url = huyaText(value).trim();
  if (/^http:\/\/[^/]*huya\.com\//i.test(url) || /^http:\/\/[^/]*msstatic\.com\//i.test(url)) {
    return "https:" + url.slice(5);
  }
  return url;
}

function huyaRoomId(value) {
  var input = huyaText(value).trim();
  if (!input) return "";
  input = input.replace(/^huya:/i, "");
  var queryMatch = input.match(/[?&](?:roomid|roomId|profileRoom|rid)=([^&#]+)/i);
  if (queryMatch) {
    try { return decodeURIComponent(queryMatch[1]); } catch (error) { return queryMatch[1]; }
  }
  var match = input.match(/huya\.com\/([^/?#]+)/i);
  if (match) {
    try { return decodeURIComponent(match[1]); } catch (error) { return match[1]; }
  }
  return input.replace(/^\/+|\/+$/g, "").split(/[?#]/)[0];
}

function huyaGameId(data) {
  var raw = data && (data.gameId || data.gid || data.game_id || data.gameHostId);
  if (raw && typeof raw === "object" && raw.value !== undefined) raw = huyaText(raw.value).split(",")[0];
  var value = huyaText(raw).trim();
  return value.replace(/\.0+$/, "");
}

function huyaCompactNumber(value) {
  var number = Number(value);
  if (!isFinite(number) || number <= 0) return huyaText(value).trim();
  if (number >= 100000000) return (number / 100000000).toFixed(number >= 1000000000 ? 1 : 2).replace(/\.0+$/, "") + "亿";
  if (number >= 10000) return (number / 10000).toFixed(number >= 100000 ? 1 : 2).replace(/\.0+$/, "") + "万";
  return String(Math.floor(number));
}

function huyaHasValue(value) {
  return value !== null && value !== undefined && huyaText(value).trim() !== "";
}

function huyaFirstValue() {
  for (var i = 0; i < arguments.length; i += 1) {
    if (huyaHasValue(arguments[i])) return arguments[i];
  }
  return "";
}

function huyaBooleanValue(value) {
  if (value === true || value === 1) return true;
  if (value === false || value === 0) return false;
  var normalized = huyaText(value).trim().toLowerCase();
  if (["1", "true", "yes", "on"].indexOf(normalized) >= 0) return true;
  if (["0", "false", "no", "off"].indexOf(normalized) >= 0) return false;
  return null;
}

function huyaNormalizeLiveFlag(value) {
  var booleanValue = huyaBooleanValue(value);
  if (booleanValue !== null) return booleanValue;
  var normalized = huyaText(value).trim().toLowerCase();
  if (["live", "living", "online", "open", "onair"].indexOf(normalized) >= 0) return true;
  if (["offline", "closed", "ended", "end"].indexOf(normalized) >= 0) return false;
  return null;
}

function huyaSafeIdentifier(value) {
  if (!huyaHasValue(value)) return "";
  if (typeof value === "number" && (!isFinite(value) || Math.abs(value) > 9007199254740991)) return "";
  return huyaText(value).trim();
}

function huyaPushDetailLine(lines, label, value) {
  var text = huyaText(value).trim();
  if (text) lines.push(label + "：" + text);
}

function huyaUnixMilliseconds(value) {
  var timestamp = Number(value);
  if (!isFinite(timestamp) || timestamp <= 0) return 0;
  return timestamp < 100000000000 ? timestamp * 1000 : timestamp;
}

function huyaDateTime(value) {
  var timestamp = huyaUnixMilliseconds(value);
  if (!timestamp) return "";
  var date = new Date(timestamp);
  if (!isFinite(date.getTime())) return "";
  function pad(number) { return number < 10 ? "0" + number : String(number); }
  return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()) +
    " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
}

function huyaLiveDuration(value) {
  var timestamp = huyaUnixMilliseconds(value);
  if (!timestamp || timestamp > Date.now()) return "";
  var totalMinutes = Math.floor((Date.now() - timestamp) / 60000);
  if (totalMinutes < 1) return "不足 1 分钟";
  var days = Math.floor(totalMinutes / 1440);
  var hours = Math.floor((totalMinutes % 1440) / 60);
  var minutes = totalMinutes % 60;
  var parts = [];
  if (days) parts.push(days + " 天");
  if (hours) parts.push(hours + " 小时");
  if (minutes || !parts.length) parts.push(minutes + " 分钟");
  return parts.join(" ");
}

function huyaScreenTypeLabel(value) {
  var normalized = huyaText(value).trim().toLowerCase();
  if (["horizontal", "landscape", "横屏"].indexOf(normalized) >= 0) return "横屏";
  if (["vertical", "portrait", "竖屏"].indexOf(normalized) >= 0) return "竖屏";
  return "";
}

function huyaItem(data) {
  var roomId = huyaRoomId(data.roomId || data.profileRoom || data.room_id);
  var pageUrl = HUYA_BASE + "/" + encodeURIComponent(roomId);
  var title = huyaText(data.title || data.introduction || data.game_introduction || data.roomName || data.game_roomName).trim();
  var nick = huyaText(data.nick || data.game_nick).trim();
  var area = huyaText(data.area || data.gameFullName || data.gameName).trim();
  var popularity = huyaCompactNumber(data.popularity || data.totalCount || data.game_total_count);
  var cover = huyaHttps(data.cover || data.screenshot || data.game_screenshot);
  var avatar = huyaHttps(data.avatar || data.avatar180 || data.game_imgUrl);
  var gameId = huyaGameId(data);
  var categoryCover = gameId
    ? "https://huyaimg.msstatic.com/cdnimage/game/" + encodeURIComponent(gameId) + "-MS.jpg"
    : "";
  cover = cover || categoryCover || avatar;
  avatar = avatar || cover;
  var isLive = huyaNormalizeLiveFlag(data.isLive) === true;
  var description = [];
  description.push("状态：" + (isLive ? "正在直播" : "暂未开播"));
  if (nick) description.push("主播：" + nick);
  if (area) description.push("分区：" + area);
  if (popularity) description.push("热度：" + popularity);
  description.push("房间号：" + roomId);

  return {
    // Rex 的 url 类型要求 id 本身就是对应 URL。
    id: pageUrl,
    type: "url",
    title: title || nick || ("虎牙房间 " + roomId),
    description: description.join("\n"),
    coverUrl: cover,
    backdropPath: cover,
    posterPath: avatar || cover,
    genreTitle: area || "虎牙直播",
    genreItems: gameId && area ? [{ id: gameId, title: area }] : [],
    peoples: nick ? [{ id: roomId, title: nick, avatar: avatar, role: "主播" }] : [],
    // 直播间是单个可播放对象，使用 movie 避免被当成无剧集的电视剧。
    mediaType: "movie",
    link: pageUrl,
    playerType: "app",
    durationText: isLive ? "直播中" : "未开播"
  };
}

function huyaLiveSearchItem(data) {
  data = data || {};
  data.isLive = true;
  var item = huyaItem(data);
  var roomId = huyaRoomId(data && (data.roomId || data.profileRoom || data.room_id));
  var nick = huyaText(data && (data.nick || data.game_nick)).trim() || ("虎牙主播 " + roomId);
  var liveTitle = huyaText(data && (data.title || data.introduction || data.game_introduction || data.roomName || data.game_roomName)).trim();
  var area = huyaText(data && (data.area || data.gameFullName || data.gameName)).trim();
  var gameId = huyaGameId(data);
  var popularity = huyaCompactNumber(data && (data.popularity || data.totalCount || data.game_total_count));
  var description = ["状态：正在直播", "主播：" + nick];
  huyaPushDetailLine(description, "直播标题", liveTitle);
  huyaPushDetailLine(description, "分区", area);
  huyaPushDetailLine(description, "游戏 ID", gameId);
  huyaPushDetailLine(description, "热度", popularity);
  huyaPushDetailLine(description, "房间号", roomId);
  item.title = "【直播中】" + nick;
  item.description = description.join("\n");
  return item;
}

function huyaIsExplicitlyOffline(value) {
  return huyaNormalizeLiveFlag(value) === false;
}

function huyaOfflineSearchItem(data) {
  var roomId = huyaRoomId(data && (data.room_id || data.roomId || data.game_liveLink));
  if (!roomId) return null;
  var nick = huyaText(data.game_nick || data.nick).trim() || ("虎牙主播 " + roomId);
  var avatar = huyaHttps(data.game_avatarUrl180 || data.game_avatarUrl52 || data.avatar);
  var intro = huyaText(data.live_intro || data.introduction).trim();
  var area = huyaText(data.game_name || data.gameName || data.gameFullName || data.area).trim();
  var gameId = huyaGameId(data);
  var pageUrl = HUYA_BASE + "/" + encodeURIComponent(roomId);
  var link = pageUrl + "?" + huyaQueryBuild({
    rexOffline: "1",
    nick: nick,
    avatar: avatar,
    intro: intro
  });
  var item = huyaItem({
    roomId: roomId,
    title: "【未开播】" + nick,
    nick: nick,
    cover: avatar,
    avatar: avatar,
    area: area,
    gameId: gameId,
    isLive: false
  });
  item.id = link;
  item.link = link;
  var description = ["状态：暂未开播", "主播：" + nick];
  huyaPushDetailLine(description, "最近标题", intro);
  huyaPushDetailLine(description, "分区", area);
  huyaPushDetailLine(description, "游戏 ID", gameId);
  huyaPushDetailLine(description, "房间号", roomId);
  item.description = description.join("\n");
  return item;
}

function huyaOfflineDataFromLink(link) {
  var input = huyaText(link);
  var queryIndex = input.indexOf("?");
  if (queryIndex < 0) return null;
  var query = huyaQueryParse(input.slice(queryIndex + 1));
  if (query.rexOffline !== "1") return null;
  return {
    roomId: huyaRoomId(input),
    nick: huyaText(query.nick).trim(),
    avatar: huyaHttps(query.avatar),
    intro: huyaText(query.intro).trim()
  };
}

function huyaOfflineItemFromLink(link) {
  var data = huyaOfflineDataFromLink(link);
  if (!data) return null;
  return huyaOfflineSearchItem({
    room_id: data.roomId,
    game_nick: data.nick,
    game_avatarUrl180: data.avatar,
    live_intro: data.intro
  });
}

function huyaOfflineDataWithError(roomId, baseData, error) {
  baseData = baseData || {};
  var info = error && error.liveInfo ? error.liveInfo : {};
  var roomData = error && error.roomData ? error.roomData : {};
  return {
    roomId: roomId,
    nick: huyaText(huyaFirstValue(baseData.nick, info.nick, roomData.nick)).trim(),
    avatar: huyaHttps(huyaFirstValue(baseData.avatar, info.avatar180, roomData.avatar180, roomData.avatar)),
    intro: huyaText(huyaFirstValue(baseData.intro, info.introduction, info.roomName, roomData.introduction)).trim(),
    area: huyaText(huyaFirstValue(baseData.area, info.gameFullName, roomData.gameFullName)).trim(),
    gameId: huyaGameId(baseData) || huyaGameId(info) || huyaGameId(roomData),
    uid: huyaFirstValue(baseData.uid, info.uid, roomData.uid),
    yyid: huyaFirstValue(baseData.yyid, info.yyid, roomData.yyid)
  };
}

function huyaOfflineItemForLink(link, roomId, data) {
  data = data || {};
  var nick = huyaText(data.nick).trim() || ("虎牙主播 " + roomId);
  var item = huyaItem({
    roomId: roomId,
    title: "【未开播】" + nick,
    nick: nick,
    cover: data.avatar,
    avatar: data.avatar,
    area: data.area,
    gameId: data.gameId,
    isLive: false
  });
  // 保留观看记录原来的 URL，避免离线刷新产生新的历史/收藏身份。
  item.id = link;
  item.link = link;
  return item;
}

function huyaUniqueRoomItems(items, limit) {
  var seen = {};
  var result = [];
  (Array.isArray(items) ? items : []).some(function (item) {
    var roomId = huyaRoomId(item && (item.link || item.id));
    var key = roomId || huyaText(item && item.id);
    if (!key || seen[key]) return false;
    seen[key] = true;
    result.push(item);
    return limit > 0 && result.length >= limit;
  });
  return result;
}

async function huyaGetJson(url) {
  var response = await Widget.http.get(url, { headers: huyaHeaders("") });
  return huyaJson(response.data);
}

function huyaNormalizeCategoryName(value) {
  return huyaText(value).trim().toLowerCase().replace(/\s+/g, "");
}

async function huyaLoadCategoryCatalog() {
  if (HUYA_CATEGORY_CACHE.items.length && HUYA_CATEGORY_CACHE.expiresAt > Date.now()) {
    return HUYA_CATEGORY_CACHE.items;
  }

  var types = [
    { id: "1", name: "网游竞技" },
    { id: "2", name: "单机游戏" },
    { id: "3", name: "手机游戏" },
    { id: "8", name: "娱乐生活" }
  ];
  var items = [];
  var seen = {};
  for (var i = 0; i < types.length; i += 1) {
    var result = await huyaGetJson("https://live.cdn.huya.com/liveconfig/game/bussLive?bussType=" + types[i].id);
    var list = result && Array.isArray(result.data) ? result.data : [];
    list.forEach(function (entry) {
      var gameId = huyaGameId(entry);
      var name = huyaText(entry.gameFullName || entry.gameName || entry.name).trim();
      if (!gameId || !name || seen[gameId]) return;
      seen[gameId] = true;
      items.push({ id: gameId, name: name, group: types[i].name });
    });
  }
  if (!items.length) throw new Error("虎牙没有返回分类目录");
  HUYA_CATEGORY_CACHE = { items: items, expiresAt: Date.now() + 6 * 60 * 60 * 1000 };
  return items;
}

function huyaCategoryIdFromLink(value) {
  var match = huyaText(value).match(/huya\.com\/g\/(\d+)/i);
  return match ? match[1] : "";
}

function huyaCategoryCard(entry) {
  var gameId = huyaText(entry && entry.id).trim();
  var name = huyaText(entry && entry.name).trim() || (HUYA_GAME_NAMES[gameId] || ("虎牙分类 " + gameId));
  var group = huyaText(entry && entry.group).trim() || "虎牙分类";
  var link = HUYA_BASE + "/g/" + encodeURIComponent(gameId);
  var cover = "https://huyaimg.msstatic.com/cdnimage/game/" + encodeURIComponent(gameId) + "-MS.jpg";
  return {
    id: link,
    type: "url",
    title: name,
    description: "虎牙游戏 ID：" + gameId + "\n所属分类：" + group + "\n点击查看该分类正在直播的房间",
    coverUrl: cover,
    backdropPath: cover,
    posterPath: cover,
    genreTitle: group,
    mediaType: "movie",
    link: link,
    playerType: "app"
  };
}

function huyaMessageCard(title, description, key) {
  var link = HUYA_BASE + "/?rexCategoryMessage=" + encodeURIComponent(key || "message") +
    "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description);
  return {
    id: link,
    type: "url",
    title: title,
    description: description,
    genreTitle: "分类查询",
    mediaType: "movie",
    link: link,
    playerType: "app"
  };
}

function huyaMessageCardFromLink(link) {
  if (huyaText(link).indexOf("rexCategoryMessage=") < 0) return null;
  var query = huyaText(link).split("?")[1] || "";
  var params = huyaQueryParse(query);
  return huyaMessageCard(
    huyaText(params.title) || "分类查询提示",
    huyaText(params.description) || "请修改查询条件后重试",
    huyaText(params.rexCategoryMessage) || "message"
  );
}

async function loadHuyaCategoryByName(params) {
  params = params || {};
  var contextItems = await huyaContextItems(params);
  if (contextItems) return contextItems;
  var query = huyaText(params.categoryName).trim();
  var normalizedQuery = huyaNormalizeCategoryName(query);
  if (!normalizedQuery) {
    return [huyaMessageCard("请输入分类名称", "例如：一起看、王者荣耀、英雄联盟", "empty")];
  }

  var catalog;
  try {
    catalog = await huyaLoadCategoryCatalog();
  } catch (error) {
    return [huyaMessageCard(
      "分类目录加载失败",
      "虎牙分类目录请求失败：" + (error && error.message ? error.message : "未知错误"),
      "catalog-error"
    )];
  }
  var exact = catalog.filter(function (entry) {
    return huyaNormalizeCategoryName(entry.name) === normalizedQuery;
  });
  var matches = exact.length ? exact : catalog.filter(function (entry) {
    var normalizedName = huyaNormalizeCategoryName(entry.name);
    return normalizedName.indexOf(normalizedQuery) >= 0 || normalizedQuery.indexOf(normalizedName) >= 0;
  });

  if (!matches.length) {
    return [huyaMessageCard(
      "未找到分类：" + query,
      "请尝试更完整的分类名称，或使用最后一个入口“自定义游戏 ID”",
      "not-found"
    )];
  }

  return matches.slice(0, 20).map(function (entry) {
    return huyaCategoryCard(entry);
  });
}

async function huyaContextItems(params) {
  params = params || {};
  if (params.peopleId) return loadHuyaRoomById({ roomId: params.peopleId });
  if (params.genreId) {
    return loadHuyaCategory({
      gameId: params.genreId,
      page: params.page,
      count: params.count
    });
  }
  return null;
}

async function loadHuyaRecommend(params) {
  params = params || {};
  var contextItems = await huyaContextItems(params);
  if (contextItems) return contextItems;
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Number(params.count || 30));
  var url = HUYA_BASE + "/cache.php?m=LiveList&do=getLiveListByPage&tagAll=0&page=" + page;
  var result = await huyaGetJson(url);
  var list = result && result.data && Array.isArray(result.data.datas) ? result.data.datas : [];
  return huyaUniqueRoomItems(list.filter(function (item) {
    return !huyaIsExplicitlyOffline(huyaFirstValue(item && item.isLive, item && item.gameLiveOn, item && item.liveStatus));
  }).map(function (item) {
    item.isLive = true;
    return huyaItem(item);
  }), count);
}

async function loadHuyaCategory(params) {
  params = params || {};
  if (params.peopleId) return loadHuyaRoomById({ roomId: params.peopleId });
  var gameId = huyaGameId({ gameId: params.genreId || params.gameId });
  if (!gameId || !/^\d+$/.test(gameId)) throw new Error("请输入有效的虎牙游戏 ID");
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(60, Number(params.count || 30)));
  var url = HUYA_BASE + "/cache.php?m=LiveList&do=getLiveListByPage&tagAll=0&gameId=" +
    encodeURIComponent(gameId) + "&page=" + page;
  var result = await huyaGetJson(url);
  var list = result && result.data && Array.isArray(result.data.datas) ? result.data.datas : [];
  if (!list.length && page === 1) {
    throw new Error("分类 " + (HUYA_GAME_NAMES[gameId] || gameId) + " 暂时没有正在直播的房间");
  }
  return huyaUniqueRoomItems(list.filter(function (item) {
    return !huyaIsExplicitlyOffline(huyaFirstValue(item && item.isLive, item && item.gameLiveOn, item && item.liveStatus));
  }).map(function (item) {
    if (!item.gid && !item.gameId) item.gid = gameId;
    item.isLive = true;
    return huyaItem(item);
  }), count);
}

async function searchHuyaRooms(params) {
  params = params || {};
  var contextItems = await huyaContextItems(params);
  if (contextItems) return contextItems;
  var directRoomId = huyaRoomId(params.roomId);
  if (directRoomId) {
    try {
      return await loadHuyaRoomById({ roomId: directRoomId });
    } catch (error) {
      // 房间号搜索只展示正在直播且有有效 HLS 线路的房间。
      if (huyaShouldHideUnavailableRoom(error)) return [];
      throw error;
    }
  }
  var keyword = huyaText(params.keyword).trim();
  if (!keyword) throw new Error("请输入虎牙直播关键词");
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(50, Number(params.count || 30)));
  var start = (page - 1) * count;
  var includeOfflineValue = huyaBooleanValue(params.includeOffline === undefined ? "1" : params.includeOffline);
  var includeOffline = includeOfflineValue !== false;
  var url = "https://search.cdn.huya.com/?m=Search&do=getSearchContent&q=" +
    encodeURIComponent(keyword) + "&uid=0&v=1&typ=-5&livestate=0&rows=" + count + "&start=" + start;
  var result = await huyaGetJson(url);
  var response = result.response || {};
  var liveBucket = response["3"] || response[3] || {};
  var anchorBucket = response["1"] || response[1] || {};
  var liveDocs = Array.isArray(liveBucket.docs) ? liveBucket.docs : [];
  var anchorDocs = Array.isArray(anchorBucket.docs) ? anchorBucket.docs : [];
  var liveItems = huyaUniqueRoomItems(liveDocs.filter(function (item) {
    var state = huyaFirstValue(item && item.gameLiveOn, item && item.isLive, item && item.liveStatus);
    return !huyaIsExplicitlyOffline(state);
  }).map(function (item) {
    return huyaLiveSearchItem(item);
  }), count);
  var liveRoomIds = {};
  liveItems.forEach(function (item) {
    liveRoomIds[huyaRoomId(item.link || item.id)] = true;
  });
  var offlineItems = [];
  if (includeOffline && liveItems.length < count) {
    offlineItems = huyaUniqueRoomItems(anchorDocs.filter(function (item) {
      var roomId = huyaRoomId(item && (item.room_id || item.game_liveLink));
      return roomId && !liveRoomIds[roomId] && huyaIsExplicitlyOffline(item.gameLiveOn);
    }).map(function (item) {
      return huyaOfflineSearchItem(item);
    }).filter(function (item) {
      return !!item;
    }), count - liveItems.length);
  }
  var items = liveItems.concat(offlineItems);
  if (!items.length) {
    return [huyaMessageCard(
      "未找到虎牙主播或直播间",
      "关键词：" + keyword + "\n请尝试主播昵称、直播标题或游戏名称",
      "search-empty"
    )];
  }
  return items;
}

function huyaRoomError(code, roomId, reason) {
  var error = new Error("虎牙房间 " + roomId + " " + reason);
  error.code = code;
  error.roomId = roomId;
  return error;
}

function huyaOfflineError(roomId, reason) {
  return huyaRoomError("HUYA_OFFLINE", roomId, reason || "当前未开播");
}

function huyaReplayError(roomId, reason) {
  return huyaRoomError("HUYA_REPLAY", roomId, reason || "当前是回放，不属于直播");
}

function huyaNotFoundError(roomId, reason) {
  return huyaRoomError("HUYA_NOT_FOUND", roomId, reason || "房间不存在或当前不可用");
}

function huyaStreamUnavailableError(roomId, reason) {
  return huyaRoomError("HUYA_STREAM_UNAVAILABLE", roomId, reason || "正在直播，但暂时没有有效 HLS 线路");
}

function huyaStateUnknownError(roomId, reason) {
  return huyaRoomError("HUYA_STATE_UNKNOWN", roomId, reason || "直播状态暂时无法确认");
}

function huyaShouldHideUnavailableRoom(error) {
  return !!error && (error.code === "HUYA_OFFLINE" || error.code === "HUYA_REPLAY");
}

function huyaShouldSkipResourceRetry(error) {
  return !!error && ["HUYA_OFFLINE", "HUYA_REPLAY", "HUYA_NOT_FOUND"].indexOf(error.code) >= 0;
}

function huyaClassifyRoomState(data) {
  data = data || {};
  var state = huyaText(huyaFirstValue(data.state, data.liveStatus, data.realLiveStatus)).trim().toUpperCase();
  var isOn = huyaBooleanValue(data.isOn);
  var isOff = huyaBooleanValue(data.isOff);
  var isReplay = huyaBooleanValue(data.isReplay);
  if (isReplay === true || state === "REPLAY") return "REPLAY";
  if (state === "ON" || isOn === true) return "ON";
  if (["OFF", "OFFLINE", "CLOSED", "CLOSE", "END", "ENDED"].indexOf(state) >= 0 || isOff === true) return "OFF";
  return "UNKNOWN";
}

async function huyaProfileRoomState(roomId) {
  var url = "https://mp.huya.com/cache.php?m=Live&do=profileRoom&roomid=" +
    encodeURIComponent(roomId) + "&showSecret=1&_=" + Date.now();
  var result;
  try {
    var response = await Widget.http.get(url, { headers: huyaHeaders(roomId) });
    result = huyaJson(response.data);
  } catch (requestError) {
    var unavailableError = huyaStateUnknownError(roomId, "状态接口请求失败");
    unavailableError.causeMessage = requestError && requestError.message ? requestError.message : "未知网络错误";
    throw unavailableError;
  }

  var businessStatus = huyaText(result && result.status).trim();
  var message = huyaText(result && result.message).trim();
  if (businessStatus && businessStatus !== "200") {
    if (businessStatus === "404" || businessStatus === "422") {
      throw huyaNotFoundError(roomId, message || "房间不存在或当前不可用");
    }
    throw huyaStateUnknownError(roomId, "状态接口返回异常" + (message ? "：" + message : ""));
  }

  var data = result && result.data;
  if (!data || typeof data !== "object") {
    throw huyaStateUnknownError(roomId, "状态接口没有返回房间数据");
  }
  var liveData = data.liveData && typeof data.liveData === "object" ? data.liveData : {};
  var profileInfo = data.profileInfo && typeof data.profileInfo === "object" ? data.profileInfo : {};
  var state = huyaClassifyRoomState({
    state: huyaFirstValue(data.liveStatus, data.realLiveStatus),
    isOn: data.isOn,
    isOff: data.isOff,
    isReplay: data.isReplay
  });
  var roomData = {
    state: huyaText(huyaFirstValue(data.liveStatus, data.realLiveStatus)).trim().toUpperCase(),
    isOn: state === "ON",
    isOff: state === "OFF",
    isReplay: state === "REPLAY",
    profileRoom: huyaFirstValue(liveData.profileRoom, profileInfo.profileRoom, roomId),
    nick: huyaFirstValue(liveData.nick, profileInfo.nick),
    avatar180: huyaFirstValue(liveData.avatar180, profileInfo.avatar180),
    introduction: huyaFirstValue(liveData.introduction, liveData.roomName),
    gameFullName: liveData.gameFullName,
    gameId: huyaFirstValue(liveData.gameId, liveData.gid),
    gid: liveData.gid,
    startTime: liveData.startTime,
    totalCount: huyaFirstValue(liveData.totalCount, liveData.userCount),
    liveId: liveData.liveId,
    uid: huyaFirstValue(liveData.uid, profileInfo.uid),
    yyid: huyaFirstValue(liveData.yyid, profileInfo.yyid),
    isPayRoom: liveData.isPayRoom,
    isSecret: liveData.isSecret,
    screenType: liveData.screenType,
    cameraOpen: liveData.cameraOpen,
    isBluRay: liveData.isBluRay,
    isAutoBitrate: liveData.isAutoBitrate
  };
  return { state: state, roomData: roomData, liveInfo: liveData };
}

function huyaExtractJsonObjectAfter(source, markerRegex) {
  markerRegex.lastIndex = 0;
  var marker = markerRegex.exec(source);
  if (!marker) return null;
  var start = source.indexOf("{", marker.index + marker[0].length);
  if (start < 0) return null;
  var depth = 0;
  var inString = false;
  var escaped = false;
  for (var i = start; i < source.length; i += 1) {
    var char = source.charAt(i);
    if (inString) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        try { return JSON.parse(source.slice(start, i + 1)); } catch (error) { return null; }
      }
    }
  }
  return null;
}

function huyaRoomState(html) {
  var roomData = huyaExtractJsonObjectAfter(
    huyaText(html),
    /var\s+TT_ROOM_DATA\s*=\s*/
  );
  if (!roomData) return null;
  return {
    state: huyaClassifyRoomState(roomData),
    rawState: huyaText(roomData.state).trim().toUpperCase(),
    isReplay: huyaClassifyRoomState(roomData) === "REPLAY",
    roomData: roomData
  };
}

function huyaIsGenericRoomLanding(html) {
  var source = huyaText(html);
  if (/var\s+TT_ROOM_DATA\s*=/.test(source)) return false;
  var titleMatch = source.match(/<title>\s*([^<]+?)\s*<\/title>/i);
  var title = titleMatch ? titleMatch[1] : "";
  return title === "虎牙直播-年轻人喜爱的弹幕式互动直播平台";
}

function huyaExtractStream(html) {
  var source = huyaText(html);
  var markers = [
    /(?:^|[,{])\s*["']?stream["']?\s*:\s*/m,
    /(?:var|let|const)\s+stream\s*=\s*/i
  ];
  var stream = null;
  for (var i = 0; i < markers.length && !stream; i += 1) {
    stream = huyaExtractJsonObjectAfter(source, markers[i]);
  }
  // 兼容旧页面中 stream 对象与其他代码位于同一行的格式。
  if (!stream) {
    var match = source.match(/stream:\s*(\{[^\r\n]+\})/);
    if (match) {
      try { stream = JSON.parse(match[1]); } catch (error) {}
    }
  }
  if (!stream) throw new Error("虎牙房间页面没有可解析的直播数据，页面结构可能已变化");
  var data = stream && Array.isArray(stream.data) ? stream.data[0] : null;
  if (!data || !Array.isArray(data.gameStreamInfoList)) {
    throw new Error("虎牙直播线路为空，房间可能未开播");
  }
  return { root: stream, data: data };
}

function huyaStreamLineCandidates(snapshot, limit) {
  var source = snapshot && snapshot.data && Array.isArray(snapshot.data.gameStreamInfoList)
    ? snapshot.data.gameStreamInfoList
    : [];
  var seen = {};
  var candidates = [];
  source.forEach(function (line, index) {
    line = line || {};
    var base = huyaHttps(line.sHlsUrl).trim().replace(/\/+$/, "");
    var antiCode = huyaText(line.sHlsAntiCode).trim();
    var streamName = huyaText(line.sStreamName).trim();
    var cdnType = huyaText(line.sCdnType).trim().toUpperCase();
    if (!/^https?:\/\//i.test(base) || !antiCode || !streamName) return;
    var key = base.toLowerCase() + "|" + streamName + "|" + cdnType;
    if (seen[key]) return;
    seen[key] = true;
    candidates.push({
      line: line,
      index: index,
      priority: huyaCdnPriority(cdnType),
      cdnKey: cdnType.replace(/\d+$/, "") || base.toLowerCase()
    });
  });
  candidates.sort(function (a, b) {
    return a.priority - b.priority || a.index - b.index;
  });
  if (!(limit > 0)) return candidates.map(function (entry) { return entry.line; });

  // 优先返回不同 CDN；不足数量时再补同 CDN 的其他有效源。
  var selected = [];
  var selectedIndexes = {};
  var seenCdns = {};
  candidates.forEach(function (entry) {
    if (selected.length >= limit || seenCdns[entry.cdnKey]) return;
    seenCdns[entry.cdnKey] = true;
    selectedIndexes[entry.index] = true;
    selected.push(entry.line);
  });
  candidates.forEach(function (entry) {
    if (selected.length >= limit || selectedIndexes[entry.index]) return;
    selected.push(entry.line);
  });
  return selected;
}

function huyaAttachRoomPageInfo(error, html, roomState, snapshot) {
  if (!error) return error;
  if (!error.roomData && roomState && roomState.roomData) error.roomData = roomState.roomData;
  var source = snapshot;
  if (!source) {
    try { source = huyaExtractStream(html); } catch (parseError) {}
  }
  if (source && source.data && source.data.gameLiveInfo) {
    error.liveInfo = source.data.gameLiveInfo;
  }
  return error;
}

function huyaAttachProfileInfo(error, profileState) {
  if (!error || !profileState) return error;
  if (!error.roomData && profileState.roomData) error.roomData = profileState.roomData;
  if (!error.liveInfo && profileState.liveInfo) error.liveInfo = profileState.liveInfo;
  return error;
}

async function huyaRoomSnapshot(roomId) {
  var response = await Widget.http.get(HUYA_BASE + "/" + encodeURIComponent(roomId), {
    headers: huyaHeaders(roomId)
  });
  var html = huyaText(response.data);
  var roomState = huyaRoomState(html);
  var pageState = roomState ? roomState.state : "UNKNOWN";

  var snapshot = null;
  var parseError = null;
  try {
    snapshot = huyaExtractStream(html);
  } catch (error) {
    parseError = error;
  }
  if (snapshot && (pageState === "ON" || pageState === "UNKNOWN") && huyaStreamLineCandidates(snapshot, 0).length) {
    snapshot.roomData = roomState && roomState.roomData ? roomState.roomData : {};
    return snapshot;
  }

  // 网页状态缺失、结构变化或线路暂空时，再用移动端房间接口核对状态。
  var profileState = null;
  var profileError = null;
  try {
    profileState = await huyaProfileRoomState(roomId);
  } catch (error) {
    profileError = error;
  }

  if (profileState) {
    if (profileState.state === "OFF") {
      var offlineError = huyaOfflineError(roomId, "当前未开播");
      huyaAttachProfileInfo(offlineError, profileState);
      throw huyaAttachRoomPageInfo(offlineError, html, roomState, snapshot);
    }
    if (profileState.state === "REPLAY") {
      var replayError = huyaReplayError(roomId, "当前是回放，不属于直播");
      huyaAttachProfileInfo(replayError, profileState);
      throw huyaAttachRoomPageInfo(replayError, html, roomState, snapshot);
    }
    if (profileState.state === "ON") {
      var streamError = huyaStreamUnavailableError(roomId, "状态为正在直播，但网页暂时没有有效 HLS 线路");
      huyaAttachProfileInfo(streamError, profileState);
      throw huyaAttachRoomPageInfo(streamError, html, roomState, snapshot);
    }
    var unknownProfileError = huyaStateUnknownError(roomId, "状态接口返回了无法识别的房间状态");
    huyaAttachProfileInfo(unknownProfileError, profileState);
    throw huyaAttachRoomPageInfo(unknownProfileError, html, roomState, snapshot);
  }

  if (profileError && profileError.code === "HUYA_NOT_FOUND") throw profileError;
  if (pageState === "OFF") {
    throw huyaAttachRoomPageInfo(huyaOfflineError(roomId, "当前未开播"), html, roomState, snapshot);
  }
  if (pageState === "REPLAY") {
    throw huyaAttachRoomPageInfo(huyaReplayError(roomId, "当前是回放，不属于直播"), html, roomState, snapshot);
  }
  if (pageState === "ON") {
    var liveStreamError = huyaStreamUnavailableError(roomId, "状态为正在直播，但网页暂时没有有效 HLS 线路");
    liveStreamError.causeMessage = profileError && profileError.message ? profileError.message :
      (parseError && parseError.message ? parseError.message : "未知错误");
    throw huyaAttachRoomPageInfo(liveStreamError, html, roomState, snapshot);
  }
  if (/offlive|offLive|直播已结束/i.test(html)) {
    throw huyaAttachRoomPageInfo(huyaOfflineError(roomId, "当前未开播"), html, roomState, snapshot);
  }
  if (profileError) throw huyaAttachRoomPageInfo(profileError, html, roomState, snapshot);
  if (huyaIsGenericRoomLanding(html)) throw huyaNotFoundError(roomId, "房间不存在或当前不可用");
  throw huyaAttachRoomPageInfo(
    huyaStateUnknownError(roomId, "无法确认直播状态，虎牙页面结构可能已变化"),
    html,
    roomState,
    snapshot
  );
}

function huyaRoomItemFromSnapshot(roomId, snapshot) {
  var info = snapshot.data.gameLiveInfo || {};
  return huyaItem({
    roomId: roomId,
    title: info.introduction || info.roomName,
    nick: info.nick,
    area: info.gameFullName,
    gameId: info.gameId || info.gid || info.gameHostId,
    popularity: info.totalCount || info.userCount,
    cover: info.screenshot,
    avatar: info.avatar180,
    isLive: true
  });
}

function huyaSnapshotCdnNames(snapshot) {
  var lines = huyaStreamLineCandidates(snapshot, 3);
  var seen = {};
  var names = [];
  lines.forEach(function (line) {
    var name = huyaCdnName(line.sCdnType, names.length);
    if (!name || seen[name]) return;
    seen[name] = true;
    names.push(name);
  });
  return names.slice(0, 3);
}

function huyaAppendRoomFlags(lines, roomData, info, includeLiveOnly) {
  roomData = roomData || {};
  info = info || {};
  var isPaid = huyaBooleanValue(huyaFirstValue(roomData.isPayRoom, info.isPayRoom));
  var isSecret = huyaBooleanValue(huyaFirstValue(roomData.isSecret, info.isSecret));
  var cameraOpen = huyaBooleanValue(huyaFirstValue(info.cameraOpen, roomData.cameraOpen));
  var isBluRay = huyaBooleanValue(huyaFirstValue(info.isBluRay, roomData.isBluRay));
  var isAutoBitrate = huyaBooleanValue(huyaFirstValue(info.isAutoBitrate, roomData.isAutoBitrate));
  var screenType = huyaScreenTypeLabel(huyaFirstValue(info.screenType, roomData.screenType));
  if (isPaid !== null) lines.push("房间类型：" + (isPaid ? "付费" : "免费"));
  if (isSecret !== null) lines.push("访问状态：" + (isSecret ? "私密" : "公开"));
  if (includeLiveOnly === false) return;
  if (screenType) lines.push("画面方向：" + screenType);
  if (cameraOpen !== null) lines.push("摄像头：" + (cameraOpen ? "开启" : "未开启"));
  if (isBluRay !== null) lines.push("蓝光画质：" + (isBluRay ? "支持" : "不支持"));
  if (isAutoBitrate !== null) lines.push("自动码率：" + (isAutoBitrate ? "支持" : "不支持"));
}

function huyaLiveDetailDescription(roomId, snapshot) {
  var info = snapshot.data.gameLiveInfo || {};
  var roomData = snapshot.roomData || {};
  var nick = huyaText(huyaFirstValue(info.nick, roomData.nick)).trim();
  var liveTitle = huyaText(huyaFirstValue(info.introduction, info.roomName, roomData.introduction)).trim();
  var contentIntro = huyaText(info.contentIntro).trim();
  var area = huyaText(huyaFirstValue(info.gameFullName, roomData.gameFullName)).trim();
  var gameId = huyaGameId(info) || huyaGameId(roomData);
  var popularity = huyaCompactNumber(huyaFirstValue(info.totalCount, roomData.totalCount, roomData.popular));
  var startTime = huyaFirstValue(info.startTime, roomData.startTime);
  var qualities = huyaQualities(snapshot.root).map(function (quality) { return quality.name; });
  var cdnNames = huyaSnapshotCdnNames(snapshot);
  var lines = ["状态：正在直播"];
  huyaPushDetailLine(lines, "主播", nick);
  huyaPushDetailLine(lines, "直播标题", liveTitle);
  if (contentIntro && contentIntro !== liveTitle) huyaPushDetailLine(lines, "内容简介", contentIntro);
  huyaPushDetailLine(lines, "分区", area);
  huyaPushDetailLine(lines, "游戏 ID", gameId);
  huyaPushDetailLine(lines, "房间号", roomId);
  huyaPushDetailLine(lines, "热度", popularity);
  huyaPushDetailLine(lines, "开播时间", huyaDateTime(startTime));
  huyaPushDetailLine(lines, "已直播", huyaLiveDuration(startTime));
  huyaPushDetailLine(lines, "画质", qualities.join("、"));
  huyaPushDetailLine(lines, "播放线路", cdnNames.join("、"));
  lines.push("编码：H.264");
  huyaAppendRoomFlags(lines, roomData, info, true);
  huyaPushDetailLine(lines, "直播场次 ID", huyaSafeIdentifier(huyaFirstValue(info.liveId, roomData.liveId)));
  huyaPushDetailLine(lines, "主播 UID", huyaSafeIdentifier(huyaFirstValue(info.uid, roomData.uid)));
  huyaPushDetailLine(lines, "主播 YYID", huyaSafeIdentifier(huyaFirstValue(info.yyid, roomData.yyid)));
  lines.push("播放资源：起播时实时生成多画质、多 CDN 线路");
  lines.push("虎牙地址：" + HUYA_BASE + "/" + roomId);
  return lines.join("\n");
}

function huyaOfflineDetailDescription(roomId, offlineData, roomData) {
  offlineData = offlineData || {};
  roomData = roomData || {};
  var isReplay = huyaBooleanValue(roomData.isReplay) === true;
  var nick = huyaText(huyaFirstValue(offlineData.nick, roomData.nick)).trim();
  var intro = huyaText(huyaFirstValue(offlineData.intro, roomData.introduction)).trim();
  var area = huyaText(huyaFirstValue(offlineData.area, roomData.gameFullName)).trim();
  var gameId = huyaGameId(offlineData) || huyaGameId(roomData);
  var lines = ["状态：" + (isReplay ? "当前为回放，不属于直播" : "暂未开播")];
  huyaPushDetailLine(lines, "主播", nick);
  huyaPushDetailLine(lines, "最近标题", intro);
  huyaPushDetailLine(lines, "分区", area);
  huyaPushDetailLine(lines, "游戏 ID", gameId);
  huyaPushDetailLine(lines, "房间号", roomId);
  huyaAppendRoomFlags(lines, roomData, {}, false);
  huyaPushDetailLine(lines, "主播 UID", huyaSafeIdentifier(huyaFirstValue(offlineData.uid, roomData.uid)));
  huyaPushDetailLine(lines, "主播 YYID", huyaSafeIdentifier(huyaFirstValue(offlineData.yyid, roomData.yyid)));
  lines.push("播放状态：等待主播开播，当前没有播放资源");
  lines.push("虎牙地址：" + HUYA_BASE + "/" + roomId);
  return lines.join("\n");
}

function huyaEnrichOfflineItem(item, roomId, offlineData, roomData) {
  roomData = roomData || {};
  var nick = huyaText(huyaFirstValue(offlineData && offlineData.nick, roomData.nick)).trim() || ("虎牙主播 " + roomId);
  var area = huyaText(huyaFirstValue(offlineData && offlineData.area, roomData.gameFullName)).trim();
  var gameId = huyaGameId(offlineData) || huyaGameId(roomData);
  item.title = "【未开播】" + nick;
  item.description = huyaOfflineDetailDescription(roomId, offlineData, roomData);
  item.genreTitle = area || "虎牙直播";
  item.genreItems = gameId && area ? [{ id: gameId, title: area }] : [];
  item.peoples = [{ id: roomId, title: nick, avatar: item.posterPath || item.coverUrl || "", role: "主播" }];
  item.durationText = "未开播";
  return item;
}

async function loadHuyaRoomById(params) {
  params = params || {};
  if (params.genreId) return loadHuyaCategory({ gameId: params.genreId, page: params.page, count: params.count });
  var roomId = huyaRoomId(params.peopleId || params.roomId);
  if (!roomId) throw new Error("请输入虎牙房间号或房间链接");
  try {
    var snapshot = await huyaRoomSnapshot(roomId);
    return [huyaRoomItemFromSnapshot(roomId, snapshot)];
  } catch (error) {
    // 首页“指定虎牙房间”遇到未开播时返回空列表，让 Rex 隐藏该模块而不是显示加载错误。
    if (huyaShouldHideUnavailableRoom(error)) return [];
    throw error;
  }
}

async function huyaCategoryDetail(gameId) {
  var catalog = [];
  try {
    catalog = await huyaLoadCategoryCatalog();
  } catch (error) {}
  var entry = catalog.filter(function (item) { return item.id === gameId; })[0] || {
    id: gameId,
    name: HUYA_GAME_NAMES[gameId] || ("虎牙分类 " + gameId),
    group: "虎牙分类"
  };
  var item = huyaCategoryCard(entry);
  if (item.backdropPath) item.backdropPaths = [item.backdropPath];
  try {
    var rooms = await loadHuyaCategory({ gameId: gameId, page: 1, count: 30 });
    item.relatedItems = rooms.slice(0, 24);
    item.description += "\n当前直播：" + rooms.length + " 个（详情页显示前 24 个）";
  } catch (error) {
    item.relatedItems = [];
    item.description += "\n当前没有可显示的直播间";
  }
  return item;
}

async function loadDetail(link) {
  var messageItem = huyaMessageCardFromLink(link);
  if (messageItem) return messageItem;
  var categoryId = huyaCategoryIdFromLink(link);
  if (categoryId) return huyaCategoryDetail(categoryId);
  var offlineData = huyaOfflineDataFromLink(link);
  var offlineItem = huyaOfflineItemFromLink(link);
  var roomId = huyaRoomId(link);
  if (!roomId) return null;
  var snapshot;
  try {
    // 即使搜索时显示未开播，进入详情仍重新检查，主播刚开播时立即转为直播详情。
    snapshot = await huyaRoomSnapshot(roomId);
  } catch (error) {
    if (huyaShouldHideUnavailableRoom(error)) {
      var refreshedOfflineData = huyaOfflineDataWithError(roomId, offlineData, error);
      var refreshedOfflineItem = offlineItem || huyaOfflineItemForLink(link, roomId, refreshedOfflineData);
      huyaEnrichOfflineItem(refreshedOfflineItem, roomId, refreshedOfflineData, error.roomData || {});
      if (refreshedOfflineItem.backdropPath) refreshedOfflineItem.backdropPaths = [refreshedOfflineItem.backdropPath];
      return refreshedOfflineItem;
    }
    throw error;
  }
  var item = huyaRoomItemFromSnapshot(roomId, snapshot);
  var info = snapshot.data.gameLiveInfo || {};
  var gameId = huyaGameId(info);

  // 不在详情中固定 videoUrl；真正起播时由 loadResource 返回多画质、多 CDN 资源。
  // 详情沿用直播标题；只有顶层搜索结果使用“【直播中】主播名”标签。
  item.description = huyaLiveDetailDescription(roomId, snapshot);
  if (item.backdropPath) item.backdropPaths = [item.backdropPath];

  if (gameId) {
    try {
      var related = await loadHuyaCategory({ gameId: gameId, page: 1, count: 16 });
      item.relatedItems = related.filter(function (entry) {
        return huyaRoomId(entry.link) !== roomId;
      }).slice(0, 12);
    } catch (error) {
      item.relatedItems = [];
    }
  }
  return item;
}

function huyaQueryParse(value) {
  var result = {};
  var input = huyaText(value).replace(/^\?/, "");
  if (!input) return result;
  input.split("&").forEach(function (part) {
    if (!part) return;
    var index = part.indexOf("=");
    var key = index >= 0 ? part.slice(0, index) : part;
    var raw = index >= 0 ? part.slice(index + 1) : "";
    try { key = decodeURIComponent(key.replace(/\+/g, "%20")); } catch (error) {}
    try { raw = decodeURIComponent(raw.replace(/\+/g, "%20")); } catch (error) {}
    result[key] = raw;
  });
  return result;
}

function huyaQueryBuild(params) {
  var parts = [];
  Object.keys(params).forEach(function (key) {
    var value = params[key];
    if (value === null || value === undefined || value === "") return;
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
  });
  return parts.join("&");
}

function huyaBase64Decode(value) {
  var input = huyaText(value).replace(/\s+/g, "");
  if (typeof atob === "function") return atob(input);
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var index = 0;
  while (index < input.length) {
    var e1 = alphabet.indexOf(input.charAt(index++));
    var e2 = alphabet.indexOf(input.charAt(index++));
    var e3 = alphabet.indexOf(input.charAt(index++));
    var e4 = alphabet.indexOf(input.charAt(index++));
    var c1 = (e1 << 2) | (e2 >> 4);
    var c2 = ((e2 & 15) << 4) | (e3 >> 2);
    var c3 = ((e3 & 3) << 6) | e4;
    output += String.fromCharCode(c1);
    if (e3 !== 64 && e3 !== -1) output += String.fromCharCode(c2);
    if (e4 !== 64 && e4 !== -1) output += String.fromCharCode(c3);
  }
  return output;
}

function huyaAdd32(a, b) {
  return (a + b) & 0xffffffff;
}

function huyaRol(value, shift) {
  return (value << shift) | (value >>> (32 - shift));
}

function huyaMd5Cycle(state, block) {
  var a = state[0], b = state[1], c = state[2], d = state[3];
  var originalA = a, originalB = b, originalC = c, originalD = d;
  var shifts = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
    5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
    4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
    6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  var constants = [
    -680876936,-389564586,606105819,-1044525330,-176418897,1200080426,-1473231341,-45705983,
    1770035416,-1958414417,-42063,-1990404162,1804603682,-40341101,-1502002290,1236535329,
    -165796510,-1069501632,643717713,-373897302,-701558691,38016083,-660478335,-405537848,
    568446438,-1019803690,-187363961,1163531501,-1444681467,-51403784,1735328473,-1926607734,
    -378558,-2022574463,1839030562,-35309556,-1530992060,1272893353,-155497632,-1094730640,
    681279174,-358537222,-722521979,76029189,-640364487,-421815835,530742520,-995338651,
    -198630844,1126891415,-1416354905,-57434055,1700485571,-1894986606,-1051523,-2054922799,
    1873313359,-30611744,-1560198380,1309151649,-145523070,-1120210379,718787259,-343485551
  ];
  for (var i = 0; i < 64; i += 1) {
    var f, g;
    if (i < 16) { f = (b & c) | ((~b) & d); g = i; }
    else if (i < 32) { f = (d & b) | ((~d) & c); g = (5 * i + 1) % 16; }
    else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
    else { f = c ^ (b | (~d)); g = (7 * i) % 16; }
    var next = d;
    d = c;
    c = b;
    b = huyaAdd32(b, huyaRol(huyaAdd32(huyaAdd32(a, f), huyaAdd32(constants[i], block[g])), shifts[i]));
    a = next;
  }
  state[0] = huyaAdd32(originalA, a);
  state[1] = huyaAdd32(originalB, b);
  state[2] = huyaAdd32(originalC, c);
  state[3] = huyaAdd32(originalD, d);
}

function huyaMd5(value) {
  var text = unescape(encodeURIComponent(huyaText(value)));
  var bytes = [];
  for (var i = 0; i < text.length; i += 1) bytes.push(text.charCodeAt(i) & 255);
  var bitLength = bytes.length * 8;
  bytes.push(128);
  while ((bytes.length % 64) !== 56) bytes.push(0);
  for (i = 0; i < 8; i += 1) bytes.push(Math.floor(bitLength / Math.pow(256, i)) & 255);
  var state = [1732584193, -271733879, -1732584194, 271733878];
  for (var offset = 0; offset < bytes.length; offset += 64) {
    var block = [];
    for (var j = 0; j < 16; j += 1) {
      var p = offset + j * 4;
      block[j] = bytes[p] | (bytes[p + 1] << 8) | (bytes[p + 2] << 16) | (bytes[p + 3] << 24);
    }
    huyaMd5Cycle(state, block);
  }
  var hex = "";
  for (i = 0; i < 4; i += 1) {
    for (j = 0; j < 4; j += 1) {
      var byte = (state[i] >>> (j * 8)) & 255;
      hex += (byte + 256).toString(16).slice(1);
    }
  }
  return hex;
}

function huyaRotateViewerUid(uid) {
  var base = 4294967296;
  var low = uid % base;
  var high = uid - low;
  var rotatedLow = ((low * 256) % base) + Math.floor(low / 16777216);
  return high + rotatedLow;
}

function huyaBuildAntiCode(streamName, viewerUid, rawAntiCode, bitRate) {
  var params = huyaQueryParse(rawAntiCode);
  var encodedFm = huyaText(params.fm).trim();
  var wsTime = huyaText(params.wsTime).toLowerCase();
  if (!encodedFm || !wsTime) throw new Error("虎牙播放签名缺少 fm/wsTime");
  var ctype = huyaText(params.ctype).trim() || "huya_webh5";
  var platformId = huyaText(params.t).trim() || "100";
  var isWap = platformId === "103";
  var now = Date.now();
  var seqId = viewerUid + now;
  var secretHash = huyaMd5(seqId + "|" + ctype + "|" + platformId);
  var calcUid = isWap ? viewerUid : huyaRotateViewerUid(viewerUid);
  var template = huyaBase64Decode(encodedFm);
  var secret = template
    .replace("$0", String(calcUid))
    .replace("$1", streamName)
    .replace("$2", secretHash)
    .replace("$3", wsTime);
  var wsSecret = huyaMd5(secret);

  delete params.fm;
  delete params.wsSecret;
  delete params.seqid;
  delete params.u;
  delete params.uid;
  delete params.uuid;
  params.wsSecret = wsSecret;
  params.wsTime = wsTime;
  params.seqid = String(seqId);
  params.ctype = ctype;
  params.ver = "1";
  params.fs = params.fs || "bgct";
  params.t = platformId;
  if (isWap) params.uid = String(viewerUid);
  else params.u = String(calcUid);
  params.codec = "264";
  if (Number(bitRate) > 0) params.ratio = String(bitRate);
  else delete params.ratio;
  return huyaQueryBuild(params);
}

async function huyaAnonymousUid() {
  if (HUYA_UID_CACHE.uid && HUYA_UID_CACHE.expiresAt > Date.now()) {
    return HUYA_UID_CACHE.uid;
  }
  var payload = { appId: 5002, byPass: 3, context: "", version: "2.4", data: {} };
  var options = { headers: {
      "User-Agent": HUYA_UA,
      Accept: "*/*",
      Origin: HUYA_BASE,
      Referer: HUYA_BASE + "/",
      "Content-Type": "application/json"
    } };
  var response;
  try {
    // 原生网络层通常要求 JSON 字符串。
    response = await Widget.http.post(
      "https://udblgn.huya.com/web/anonymousLogin",
      JSON.stringify(payload),
      options
    );
  } catch (firstError) {
    // 兼容会自动序列化对象的 Widget.http 实现。
    response = await Widget.http.post(
      "https://udblgn.huya.com/web/anonymousLogin",
      payload,
      options
    );
  }
  var result = huyaJson(response.data);
  var uid = Number(result && result.data && result.data.uid);
  if (!uid || !isFinite(uid)) throw new Error("无法取得虎牙匿名播放 UID");
  HUYA_UID_CACHE = { uid: uid, expiresAt: Date.now() + 10 * 60 * 1000 };
  return uid;
}

function huyaQualities(root) {
  var source = Array.isArray(root.vMultiStreamInfo) ? root.vMultiStreamInfo : [];
  var qualities = [{ name: "原画", bitRate: 0 }];
  source.forEach(function (item) {
    var name = huyaText(item.sDisplayName).trim();
    var bitRate = Number(item.iBitRate || 0);
    if (!name || name.indexOf("HDR") >= 0) return;
    if (!qualities.some(function (q) { return q.bitRate === bitRate; })) {
      qualities.push({ name: name, bitRate: bitRate });
    }
  });
  return qualities.sort(function (a, b) {
    if (a.bitRate === 0) return -1;
    if (b.bitRate === 0) return 1;
    return b.bitRate - a.bitRate;
  });
}

function huyaCdnName(value, index) {
  var type = huyaText(value).trim().toUpperCase();
  var baseType = type.replace(/\d+$/, "");
  var names = {
    AL: "阿里云", TX: "腾讯云", HW: "华为云", WS: "网宿",
    HY: "虎牙", HS: "火山", HWCDN: "华为云"
  };
  return names[type] || names[baseType] || type || ("线路 " + (index + 1));
}

function huyaCdnPriority(value) {
  var type = huyaText(value).trim().toUpperCase();
  var baseType = type.replace(/\d+$/, "");
  var priority = { TX: 10, AL: 20, HW: 30, HWCDN: 30, HS: 40, HY: 50, WS: 60 };
  return priority[type] || priority[baseType] || 100;
}

async function huyaResourcesFromSnapshot(roomId, snapshot) {
  var streamLines = huyaStreamLineCandidates(snapshot, 3);
  if (!streamLines.length) throw huyaStreamUnavailableError(roomId, "暂时没有有效 HLS 线路");

  var viewerUid = await huyaAnonymousUid();
  var qualities = huyaQualities(snapshot.root);
  var resources = [];
  qualities.forEach(function (quality) {
    streamLines.forEach(function (line, lineIndex) {
      try {
        var base = huyaHttps(line.sHlsUrl).replace(/\/+$/, "");
        var antiCode = huyaBuildAntiCode(line.sStreamName, viewerUid, line.sHlsAntiCode, quality.bitRate);
        var cdnName = huyaCdnName(line.sCdnType, lineIndex);
        var headers = huyaHeaders(roomId);
        resources.push({
          name: quality.name + " · " + cdnName,
          description: "HLS · H.264 · " +
            (quality.bitRate > 0 ? quality.bitRate + " Kbps" : "原始码率"),
          url: base + "/" + line.sStreamName + ".m3u8?" + antiCode,
          customHeaders: headers,
          headers: headers,
          playerType: "app"
        });
      } catch (lineError) {
        // 单条 CDN 签名异常时跳过该资源，保留其他可用线路。
      }
    });
  });
  if (!resources.length) throw huyaStreamUnavailableError(roomId, "所有 HLS 线路的播放签名都生成失败");
  return resources;
}

async function huyaLoadResourcesOnce(roomId) {
  var snapshot = await huyaRoomSnapshot(roomId);
  return huyaResourcesFromSnapshot(roomId, snapshot);
}

async function loadResource(params) {
  params = params || {};
  var target = params.link || params.id;
  if (huyaCategoryIdFromLink(target) || huyaText(target).indexOf("rexCategoryMessage=") >= 0) {
    throw new Error("这是分类查询卡片，请在详情页选择正在直播的房间");
  }
  var roomId = huyaRoomId(target);
  if (!roomId) throw new Error("缺少虎牙房间号");
  try {
    return await huyaLoadResourcesOnce(roomId);
  } catch (firstError) {
    if (huyaShouldSkipResourceRetry(firstError)) throw firstError;
    // UID、页面签名或临时网络状态可能已经过期：清缓存并完整刷新一次。
    HUYA_UID_CACHE = { uid: 0, expiresAt: 0 };
    try {
      return await huyaLoadResourcesOnce(roomId);
    } catch (secondError) {
      if (huyaShouldSkipResourceRetry(secondError)) throw secondError;
      var reason = secondError && secondError.message ? secondError.message :
        (firstError && firstError.message ? firstError.message : "未知错误");
      var resourceError = new Error("虎牙房间 " + roomId + " 播放资源加载失败（已自动重试一次）：" + reason);
      resourceError.code = secondError && secondError.code ? secondError.code :
        (firstError && firstError.code ? firstError.code : "HUYA_RESOURCE_FAILED");
      resourceError.firstMessage = firstError && firstError.message ? firstError.message : "";
      throw resourceError;
    }
  }
}

// 兼容旧版函数名；新版元数据统一调用标准 loadResource。
async function loadHuyaResource(params) {
  return loadResource(params);
}
