import Email from "../models/email.js";

export const receiveEmail = async (req, res, next) => {
  const customerName = req.body.customerName;
  const email = req.body.email;
  const message = req.body.message;
  const date = new Date().toLocaleString();
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