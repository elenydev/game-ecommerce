import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import csrf from "csurf";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import methodOverride from "method-override";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";

import {
  signUp,
  signIn,
  changeAvatar,
  changePassword,
  remindPassword,
} from "./controllers/user.js";

import {
  addProduct,
  getProducts,
  changeAmount,
  deleteProduct,
} from "./controllers/products.js";

import { createOrder, getOrders, changeStatus } from "./controllers/order.js";

import { getEmails, receiveEmail, removeEmail } from "./controllers/emails.js";

import {
  addSubscriber,
  getSubscribtions,
  removeSubscribtion,
} from "./controllers/subscriptions.js";

import isAuth from "./middleware/is-auth.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const csrfProtection = csrf();
const app = express();
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ecommerce.afuvr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const connection = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let gfs;

connection.once("open", () => {
  gfs = Grid(connection.db, mongoose.mongo);
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    const filename =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    const fileInfo = {
      filename: filename,
      bucketName: "images",
    };
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
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer({ storage, fileFilter: fileFilter });
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
router.use("/changeAvatar", upload.single("avatar"), changeAvatar);
router.use("/changePassword", isAuth, changePassword);
router.use("/remindPassword", remindPassword);

router.use("/getProducts", getProducts);
router.use("/addProduct", upload.single("productImg"), addProduct);
router.use("/changeAmount", isAuth, changeAmount);
router.use("/deleteProduct", isAuth, deleteProduct);

router.use("/createOrder", isAuth, createOrder);
router.use("/getOrders", getOrders);
router.use("/changeStatus", isAuth, changeStatus);

router.use("/receiveEmail", receiveEmail);
router.use("/getEmails", getEmails);
router.use("/removeEmail", isAuth, removeEmail);

router.use("/addSubscriber", addSubscriber);
router.use("/getSubscribtions", getSubscribtions);
router.use("/removeSubscribtion", isAuth, removeSubscribtion);


router.use("/images/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    console.log(file);
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    if (
      file.contentType === "image/jpeg" ||
      file.contentType === "image/png" ||
      file.contentType === "image/jpg"
    ) {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});


app.use("/", router);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    const server = app.listen(process.env.PORT || 8080);
  })
  .catch((err) => {
    console.log(err);
  });
