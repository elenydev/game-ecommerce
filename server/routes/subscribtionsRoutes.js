import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth.js";

import {
  addSubscriber,
  getSubscribtions,
  removeSubscribtion,
} from "../controllers/subscriptions.js";

router.use("/addSubscriber", addSubscriber);
router.use("/getSubscribtions", getSubscribtions);
router.use("/removeSubscribtion", isAuth, removeSubscribtion);

export default router;
