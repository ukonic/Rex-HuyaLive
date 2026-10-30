# Rex 虎牙直播模块

适用于 Rex 播放器的虎牙直播 ForwardWidget 模块，由 `ukonic` 维护。

当前版本：**v0.3.17**

## 导入地址

推荐使用固定入口。以后更新模块时，Rex 中不需要更换地址：

```text
https://raw.githubusercontent.com/ukonic/Rex-HuyaLive/main/Rex-Huya-Live.js
```

需要锁定 v0.3.17 时使用：

```text
https://raw.githubusercontent.com/ukonic/Rex-HuyaLive/main/versions/Rex-Huya-Live-v0.3.17.js
```

在 Rex 的模块导入界面粘贴 Raw 地址。请勿使用 GitHub 仓库首页或带 `/blob/` 的文件页面地址。

## 主要功能

- 虎牙推荐直播与分页加载
- 热门分类、网游竞技、单机游戏、手机游戏和娱乐生活分区
- 按中文名称查找分类，并支持自定义虎牙游戏 ID
- 通过房间号或完整虎牙链接加载指定直播间
- 按关键词或主播名搜索，可选房间号，并可选择是否包含未开播主播
- 未开播主播仅出现在搜索结果末尾，不进入推荐、分类或相关直播列表
- 打开详情和起播时重新检查直播状态，区分直播、未开播、回放、房间异常和线路异常
- 动态生成 HLS 播放签名，提供多画质和多 CDN 线路；单条线路失败时保留其他可用线路

## 模块入口

| 入口 | 用途 |
| --- | --- |
| 虎牙推荐直播 | 浏览当前推荐直播 |
| 虎牙热门分类 | 快速选择常用游戏和娱乐分类 |
| 网游竞技 | 电脑网游与电竞分区 |
| 单机游戏 | 单机、主机、沙盒与生存游戏分区 |
| 手机游戏 | 热门手游与休闲手游分区 |
| 娱乐生活 | 户外、才艺、体育、一起看等分区 |
| 按名称查找分类 | 不知道游戏 ID 时按中文名称查询 |
| 指定虎牙房间 | 输入房间号或虎牙房间链接 |
| 自定义游戏 ID | 使用虎牙分类网址 `/g/` 后的数字 |

## 版本文件

带版本号的文件统一存放在 [`versions`](./versions) 文件夹中，便于测试和回退。日常使用建议选择固定入口或最新版。

| 版本 | 文件 |
| --- | --- |
| v0.3.17 | [`Rex-Huya-Live-v0.3.17.js`](./versions/Rex-Huya-Live-v0.3.17.js) |
| v0.3.16 | [`Rex-Huya-Live-v0.3.16.js`](./versions/Rex-Huya-Live-v0.3.16.js) |
| v0.3.15 | [`Rex-Huya-Live-v0.3.15.js`](./versions/Rex-Huya-Live-v0.3.15.js) |
| v0.3.14 | [`Rex-Huya-Live-v0.3.14.js`](./versions/Rex-Huya-Live-v0.3.14.js) |
| v0.3.13 | [`Rex-Huya-Live-v0.3.13.js`](./versions/Rex-Huya-Live-v0.3.13.js) |
| v0.3.12 | [`Rex-Huya-Live-v0.3.12.js`](./versions/Rex-Huya-Live-v0.3.12.js) |
| v0.3.11 | [`Rex-Huya-Live-v0.3.11.js`](./versions/Rex-Huya-Live-v0.3.11.js) |
| v0.3.10 | [`Rex-Huya-Live-v0.3.10.js`](./versions/Rex-Huya-Live-v0.3.10.js) |
| v0.3.9 | [`Rex-Huya-Live-v0.3.9.js`](./versions/Rex-Huya-Live-v0.3.9.js) |
| v0.3.8 | [`Rex-Huya-Live-v0.3.8.js`](./versions/Rex-Huya-Live-v0.3.8.js) |
| v0.3.6 | [`Rex-Huya-Live-v0.3.6.js`](./versions/Rex-Huya-Live-v0.3.6.js) |

## 当前限制

- 仅处理虎牙直播，不提供房间回放。
- 当前版本未接入弹幕。
- 模块依赖虎牙公开接口和网页直播数据结构；上游接口或网页改版时可能需要更新。
- 房间没有有效 HLS 线路或所有播放签名均生成失败时，无法提供播放资源。

## 发布规则

发布新版本时将版本化文件放入 `versions` 文件夹，同时更新根目录的 `Rex-Huya-Live.js` 固定入口，并创建对应 Git 标签和 Release。

本项目为非官方模块，与虎牙直播及 Rex 官方无隶属关系。
