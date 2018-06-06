import bodyParser from "body-parser";
import express from "express";
import cont from "./controllers/messages_controller";

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public/build`));

const url = "/api/messages";
app.post(url, cont.create);
app.get(url, cont.read);
app.put(`${url}/:id`, cont.update);
app.delete(`${url}/:id`, cont.deleteMessage);

app.listen(port, () => console.log(`listening on port ${port}`));
