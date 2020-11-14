import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import socket from "./socket.js";
import cors from "cors";
import csrf from "csurf";
import multer from "multer";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";

import { signUp, signIn } from "./controllers/user.js";
import { addProduct, getProducts } from "./controllers/products.js";
import { createOrder, getOrders, changeStatus } from "./controllers/order.js";
import { getEmails, receiveEmail, removeEmail } from "./controllers/emails.js";
import { get } from "http";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const csrfProtection = csrf();
const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });


app.use(express.static(path.join(__dirname, "public")));
app.use("/images/", express.static(path.join(__dirname, "images")));

app.use(bodyParser.json());



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

router.use("/signUp", upload.single("avatar"), signUp);
router.use("/signIn", signIn);

router.use("/getProducts", getProducts);
router.use("/addProduct", upload.single("productImg"), addProduct);

router.use("/createOrder", createOrder);
router.use("/getOrders", getOrders);
router.use("/changeStatus", changeStatus);

router.use("/receiveEmail", receiveEmail);
router.use("/getEmails", getEmails);
router.use("/removeEmail", removeEmail);


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
