# Push Bot

把你的 TG Channel 訊息推送到 Flarum

<img width="60%" src="https://user-images.githubusercontent.com/93700457/177198509-88ebf5f5-0d09-4eb5-9063-f9aa50c2ed99.png" /><img width="40%" src="https://user-images.githubusercontent.com/93700457/177198597-12acbbdc-295d-45d5-8ff6-56d4ac8ebabc.png" />

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
