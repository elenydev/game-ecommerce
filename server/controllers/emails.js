import Email from "../models/email.js";

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});



export const receiveEmail = async (req, res, next) => {
  const customerName = req.body.customerName;
  const email = req.body.email;
  const message = req.body.message;
  const date = new Date().toLocaleString();

   const mailOptions = {
     from: email,
     to: "online.gaming.dummy@gmail.com",
     subject: `Email from site: ${customerName}`,
     html: `<h3>Email from: ${customerName}</h3>
    <br/>
    <div>
    <p>${message}</p>
    <br/>
    <small>Reply to the customer: ${email}</small></p>
    </div>`,
   };
  try {
    const newEmail = new Email({
      customerName,
      email,
      message,
      date,
    });
    await newEmail.save();
    res.send({ newEmail });
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      }
    });
    next();
  } catch (err) {
    res.send({ message: "Something went wrong, try again" });
    next();
  }
};

export const getEmails = async (req, res, next) => {
  try {
    const emails = await Email.find();
    res.send({ emails });
    next();
  } catch (err) {
    res.send({ message: "Something went wrong with fetching products" });
  }
};

export const removeEmail = async (req, res, next) => {
  const emailId = req.body.emailId;

  try {
    await Email.findByIdAndDelete(emailId);
    res.send({ email: req.body });
  } catch (err) {
    res.send({ message: "Something went wrong, try again" });
  }
};