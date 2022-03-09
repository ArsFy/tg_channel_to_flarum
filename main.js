process.env.NTBA_FIX_319 = 1;
const config = require("./config.json");
const axios = require("axios");
const moment = require("moment");
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(config.token, { polling: true });

// is tag in msg?
const htag = (msg)=>{
    for (let i in config.tag){
        if (msg.indexOf(config.tag[i]) != -1){
            return true;
        }
    }
    return false;
}

const pushToFlarum = async (user, msg) => {
    let ua = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30`;
    let index = await axios({
        headers: {
            "User-Agent": ua,
            Cookie: config.cookie,
        },
        url: config.forum,
    });
    axios({
        method: "POST",
        headers: {
            "x-csrf-token": index.headers["x-csrf-token"],
            "Content-Type": "application/json; charset=UTF-8",
            Cookie: config.cookie,
        },
        url: `${config.forum}/api/discussions`,
        data: {
            data: {
                type: "discussions",
                attributes: { title: `${moment(new Date()).format("DD/MM/YYYY HH:mm")} NOC Push`, content: `### From ${user}\n${msg}` },
                relationships: {
                    tags: {
                        data: config.forum_tag,
                    },
                },
            },
        },
    });
};

// Channel Msg
bot.on("channel_post", async (msg)=>{
    if (msg.text != undefined && msg.chat.id == config.channel){
        if (htag(msg.text)){
            let taglist = [];
            for (let i in config.tag){
                taglist.push(`#${config.tag[i]} `);
            }
            let msgText = msg.text.replace(eval(`/${taglist.join("|")}/g`), "");
            pushToFlarum(msg.author_signature!=undefined?msg.author_signature:msg.chat.title, msgText);
        }
    }
})

console.log("Start Bot...")