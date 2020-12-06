import express from "express";
const router = express.Router();

import isAuth from "../middleware/is-auth.js";
import { getEmails, receiveEmail, removeEmail } from "../controllers/emails.js";

router.use("/send", receiveEmail);
router.use("/all", getEmails);
router.use("/remove", isAuth, removeEmail);

export default router;
