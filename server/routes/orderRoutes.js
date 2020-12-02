import express from "express";
const router = express.Router();
import { createOrder, getOrders, changeStatus } from "../controllers/order.js";
import isAuth from "../middleware/is-auth.js";

router.use("/createOrder", isAuth, createOrder);
router.use("/getOrders", getOrders);
router.use("/changeStatus", isAuth, changeStatus);

export default router;
