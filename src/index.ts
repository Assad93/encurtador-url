import express from "express";
import { UrlController } from "./controllers/UrlController";
import { MongoConnection } from "./database/MongoConnection";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

MongoConnection.connect();

app.post("/", UrlController.shorten).get("/:hash", UrlController.redirect);

app.listen(port, () => {
  console.log(`Server is running in ${port} port`);
});
