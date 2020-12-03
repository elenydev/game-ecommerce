import express from "express";
import multer from "multer";
import isAuth from "../middleware/is-auth.js";
import GridFsStorage from "multer-gridfs-storage";

import {
  signUp,
  signIn,
  changeAvatar,
  changePassword,
  remindPassword,
} from "../controllers/user.js";

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
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

const router = express.Router();
const upload = multer({ storage, fileFilter: fileFilter });

router.use("/users/login", signIn);
router.use("/users/create", upload.single("avatar"), signUp);
router.use("/users/avatar", upload.single("avatar"), changeAvatar);
router.use("/users/password/change", isAuth, changePassword);
router.use("/users/password/remind", remindPassword);

export default router;
