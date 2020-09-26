

import  express,{Response} from "express";
import bodyParser from "body-parser";
import serverless from "serverless-http";

const app = express();
function updateDatabase(data:any) {

  return data;
}

app.use(bodyParser);
app.post('/updatestate', (req, res:Response) => {
  const newValue = updateDatabase(res);
  res.json(newValue);
});

module.exports.handler = serverless(app);