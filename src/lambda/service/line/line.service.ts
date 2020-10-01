import {lineClient} from "../../config/line.config";


const client  = lineClient;
function handleEvent(event:any) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken,{
      type: 'text',
      text: event.message.text
    });
}

export const lineService = handleEvent;