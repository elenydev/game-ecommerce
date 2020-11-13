import Email from "../models/email.js";

export const receiveEmail = async (req, res, next) => {
  const customerName = req.body.customerName;
  const email = req.body.email;
  const message = req.body.message;
  const date = new Date().toISOString();
  try {
    const newEmail = new Email({
      customerName,
      email,
      message,
      date,
    });
    await newEmail.save();
    res.send({ newEmail });
    next();
  } catch (err) {
    res.send({ message: "Something went wrong, try again" });
    next();
  }
};
