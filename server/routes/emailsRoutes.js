import express from "express";
const router = express.Router();

import isAuth from "../middleware/is-auth.js";
import { getEmails, receiveEmail, removeEmail } from "../controllers/emails.js";

router.use("/emails/send", receiveEmail);
router.use("/emails/all", getEmails);
router.use("/emails/remove", isAuth, removeEmail);

export default router;
