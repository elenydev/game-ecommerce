import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import socket from './socket.js'
import cors from "cors";
import csrf from "csurf";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const csrfProtection = csrf();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ecommerce.afuvr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    const server = app.listen(process.env.PORT || 8080);
    const io = socket.init(server);
  })
  .catch((err) => {
    console.log(err);
  });
