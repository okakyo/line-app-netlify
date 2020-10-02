import  {Request, Response, Router} from "express";

import {lineClient, lineMiddleware} from "../config/line.config";
import {handleEvent} from "../service/line/line.service";


const router = Router();

router.get("/",(req,res)=>{
    res.json("Hello Line Bot");
});


router.post('/webhook',lineMiddleware,(req:Request, res:Response) => {

    //ここのif分はdeveloper consoleの"接続確認"用なので削除して問題ないです。
    if(req.body.events[0].replyToken === '00000000000000000000000000000000' && req.body.events[1].replyToken === 'ffffffffffffffffffffffffffffffff'){
        res.send('Hello LINE BOT!(POST)');
        console.log('疎通確認用');
        return; 
    }

    Promise
      .all(req.body.events.map((e:any)=>{return handleEvent(e,lineClient)}))
      .then((result) => res.json(result));
});


export const lineRouter = router;