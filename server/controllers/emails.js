import Email from "../models/email.js"
import { sendEmail } from "./mailers.js"


export const receiveEmail = async (req, res, next) => {
  const date = new Date().toLocaleString()
  const { customerName, email, message } = req.body

  try {
    const newEmail = new Email({
      customerName,
      email,
      message,
      date,
    })
    await newEmail.save()
    res.status(201).send({ newEmail, message: "Email successfully sended" })
    sendEmail(email, customerName)
    next()
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
    next()
  }
}

export const getEmails = async (req, res, next) => {
  try {
    const emails = await Email.find()
    res.status(200).send({ emails, message: "Emails successfully sended" })
    next()
  } catch (err) {
    res
      .status(400)
      .send({ message: "Something went wrong with fetching products" })
  }
}

export const removeEmail = async (req, res, next) => {
  const { emailId } = req.body
  try {
    await Email.findByIdAndDelete(emailId)
    res
      .status(201)
      .send({ email: req.body, message: "Email successfully deleted" })
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
  }
}
