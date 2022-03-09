# Push Bot

把你的 TG Channel 訊息推送到 Flarum

<img width="35%" src="https://upload.cc/i1/2022/03/09/nsLPHZ.png" /><img width="65%" src="https://upload.cc/i1/2022/03/09/N0Y5Aj.png" />

### Config

```json
{
    "token": "114514:HHHHaaaaaaaaa",
    "channel": -1145141919810,
    "tag": ["網路調整", "故障通報"],

    "forum": "https://forum.noy.asia",
    "cookie": "flarum_remember=abcdefg; flarum_session=jjjjjjbbbbbccccc",
    "forum_tag": [{"type":"tags","id":"2"},{"type":"tags","id":"17"}]
}
```

- token, channel
  - Bot Token, Tg Channel ID
- tag
  - 例: 在頻道傳送包含 "#網路調整" tag 的訊息會被推送到 Flarum
- forum
  - Flarum URL (請不要在URL後添加斜杠)
- cookie
  - Login Cookie
- forum_tag
  - 傳送貼文的 Tag，如果你不知道這個 Tag 位於什麼地方，你新增貼文後抓包
  - 大概位於
```js
{
    data: {
        type: "discussions",
        attributes: { title: `title`, content: `content` },
        relationships: {
            tags: {
                data: 這裡,
            },
        },
    },
}
```

### Run
```bash
git clone https://github.com/ArsFy/tg_channel_to_flarum.git
cd tg_channel_to_flarum
npm i
node main.js
```