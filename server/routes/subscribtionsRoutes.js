import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth.js";

import {
  addSubscriber,
  getSubscribtions,
  removeSubscribtion,
} from "../controllers/subscriptions.js";

router.use("/subscribtions/add", addSubscriber);
router.use("/subscribtions/all", getSubscribtions);
router.use("/subscribtions/remove", isAuth, removeSubscribtion);

export default router;
