
import {Client} from "@line/bot-sdk";

// handle the text message function.
const TextHandler = (event:any,client:Client) =>{
  return client.replyMessage(event.replyToken,{
    type: 'text',
    text: event.message.text
});
}
// handle the image message function.
const imgHandler = (event:any,client:Client)=>{
    return client.replyMessage(event.replyToken,{
        type: 'text',
        text: "こちらの設定については未設定です。"
    });
}

// ここで Service Function としてexport する
//TODO: Client をDI 化したほうがいい

export const handleEvent = (event:any,client:Client) =>{
    
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }
    switch(event.message.type){
      case "text":
        return TextHandler(event,client);
      case "image":
        return imgHandler(event,client);
      case "location":
        return;
      default:
        return client.replyMessage(event.replyToken,{
            type: 'text',
            text: "こちらの設定については未設定です。"
    });
        break
    }
    
}


