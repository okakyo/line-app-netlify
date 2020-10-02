
import {Client} from "@line/bot-sdk";

// handle the text message function.
const TextHandler = (event:any) =>{
    return {};
}
// handle the image message function.
const imgHandler = (event:any)=>{
    return {};
}

// ここで Service Function としてexport する
//TODO: Client をDI 化したほうがいい

export const handleEvent = (event:any,client:Client) =>{
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken,{
      type: 'text',
      text: event.message.text
    });
}


