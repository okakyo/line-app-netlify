

import  express from "express";
import bodyParser from "body-parser";
import * as  serverless from "serverless";

const app = express();
function updateDatabase(data) {
  ... // update the database
  return newValue;
}

app.use(bodyParser);
app.post('/updatestate', (req, res) => {
  const newValue = updateDatabase(res.body);
  res.json(newValue);
});

module.exports.handler = serverless(app);