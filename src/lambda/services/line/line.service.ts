import line from "@line/bot-sdk";

const config = {
    channelSecret: 'チャンネルシークレット',
    channelAccessToken: 'チャンネルアクセストークン'
};

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

export const lineService = handleEvent;