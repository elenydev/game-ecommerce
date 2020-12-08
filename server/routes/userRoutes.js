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

router.use("/login", signIn);
router.use("/create", upload.single("avatar"), signUp);
router.use("/avatar", upload.single("avatar"), changeAvatar);
router.use("/password/change", isAuth, changePassword);
router.use("/password/remind", remindPassword);

export default router;
