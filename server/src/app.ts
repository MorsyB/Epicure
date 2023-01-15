import express from "express";
import routes from "./routes/index";
 import { connectDb } from "./db/index";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);


connectDb().then(async () => {
    app.listen(port, () => console.log("Listening on port:" + port));
});
