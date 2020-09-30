import {Router} from "express";
import line from "@line/bot-sdk";

const config = {
    channelSecret: 'チャンネルシークレット',
    channelAccessToken: 'チャンネルアクセストークン'
};


const router = Router();

router.get("/",(req,res)=>{
    res.json("Hello Line Bot");
});

router.post('/webhook', line.middleware(config), (req, res) => {

    //ここのif分はdeveloper consoleの"接続確認"用なので削除して問題ないです。
    if(req.body.events[0].replyToken === '00000000000000000000000000000000' && req.body.events[1].replyToken === 'ffffffffffffffffffffffffffffffff'){
        res.send('Hello LINE BOT!(POST)');
        console.log('疎通確認用');
        return; 
    }

    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);


function handleEvent(event:any) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken,{
      type: 'text',
      text: event.message.text
    });
}

export const lineRouter = router;