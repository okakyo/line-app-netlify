
import express from "express";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import {baseController} from "./controller/index";
const app = express();

const basicRouter = process.env.NODE_ENV ==="production"?"/.netlify/functions/api":"/api"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env.NODE_ENV);
console.log("ルーター",basicRouter);
app.use("/api",baseController)

export const handler = serverless(app);