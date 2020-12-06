import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import methodOverride from "method-override";

//Routes
import emailsRoutes from "./routes/emailsRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import subscribtionsRoutes from "./routes/subscribtionsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const app = express();
const mongoURI = process.env.MONGO_URI;

const connection = mongoose.createConnection(
  "mongodb+srv://Damian:wOipEDVLCVSfhPap@ecommerce.afuvr.mongodb.net/ecommerce?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
let gfs;

connection.once("open", () => {
  gfs = Grid(connection.db, mongoose.mongo);
});

app.use(cors());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
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

router.use("/images/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    console.log(file);
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "File doesn't exist",
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
app.use("/emails", emailsRoutes);
app.use("/orders", orderRoutes);
app.use("/products", productsRoutes);
app.use("/subscribtions", subscribtionsRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    const server = app.listen(process.env.PORT || 8080);
  })
  .catch((err) => {
    console.log(err);
  });
