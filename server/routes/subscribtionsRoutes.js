import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth.js";

import {
  addSubscriber,
  getSubscribtions,
  removeSubscribtion,
} from "../controllers/subscriptions.js";

router.use("/add", addSubscriber);
router.use("/all", getSubscribtions);
router.use("/remove", isAuth, removeSubscribtion);

export default router;
