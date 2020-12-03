import express from "express";
const router = express.Router();
import { createOrder, getOrders, changeStatus } from "../controllers/order.js";
import isAuth from "../middleware/is-auth.js";

router.use("/orders/create", isAuth, createOrder);
router.use("/orders/all", getOrders);
router.use("/orders/status", isAuth, changeStatus);

export default router;
