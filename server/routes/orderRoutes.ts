import express from "express";
const router = express.Router();
import { createOrder, getOrders, changeStatus } from "../controllers/order.js";
import isAuth from "../middleware/is-auth.js";

router.use("/create", isAuth, createOrder);
router.use("/all", getOrders);
router.use("/status", isAuth, changeStatus);

export default router;
