
import express from "express";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import {baseController} from "./controller/index";
const app = express();

app.use("/.netlify/functions/api",baseController)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

export const handler = serverless(app);