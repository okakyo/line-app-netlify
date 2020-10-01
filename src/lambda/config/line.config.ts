import line,{ClientConfig} from "@line/bot-sdk";
import dotenv from "dotenv";

dotenv.config();


const lineConfig:ClientConfig={
    channelSecret: process.env.channelSecret?process.env.channelSecret:"",
    channelAccessToken: process.env.channelAccessToken?process.env.channelAccessToken:""
}

export const lineMiddleware= line.middleware({
    channelSecret: process.env.channelSecret?process.env.channelSecret:"",
    channelAccessToken: process.env.channelAccessToken?process.env.channelAccessToken:""
})


export const lineClient = new line.Client(lineConfig);

