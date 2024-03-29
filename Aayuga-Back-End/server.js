import Express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Routes from './router/routes.js'
import { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = Express();
const PORT = process.env.PORT || 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
mongoose.connect(process.env.MONGODB_URL);

app.use(bodyParser.json());
app.use(Routes);

app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`);
})