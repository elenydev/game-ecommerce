import express from "express";
const router = express.Router();

import isAuth from "../middleware/is-auth.js";
import { getEmails, receiveEmail, removeEmail } from "../controllers/emails.js";

router.use("/receiveEmail", receiveEmail);
router.use("/getEmails", getEmails);
router.use("/removeEmail", isAuth, removeEmail);

export default router;
