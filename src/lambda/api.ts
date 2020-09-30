
import express from "express";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import {baseController} from "./controller/index";
const app = express();

const basicRouter = process.env.NODE_ENV ==="production"?"/.netlify/functions/main":"/main"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(basicRouter,baseController);

export const handler = serverless(app);