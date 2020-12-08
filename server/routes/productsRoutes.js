import express from "express";
import isAuth from "../middleware/is-auth.js";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";

import {
  addProduct,
  getProducts,
  changeAmount,
  deleteProduct,
} from "../controllers/products.js";


const storage = new GridFsStorage({
  url:
    "mongodb+srv://admin:xchPdPtsZsuYY5RA@cluster0.9lha6.mongodb.net/<ecommercecopy>?retryWrites=true&w=majority",
  file: (req, file) => {
    const filename =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    const fileInfo = {
      filename: filename,
      bucketName: "images",
    }
  },
})

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

const router = express.Router();
const upload = multer({ storage, fileFilter: fileFilter });

router.use("/all", getProducts);
router.use("/add", upload.single("productImg"), addProduct);
router.use("/amount", isAuth, changeAmount);
router.use("/remove", isAuth, deleteProduct);

export default router;
