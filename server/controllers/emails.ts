import { RequestHandler } from "express"
import Email from "../models/email.js"
import { sendEmail } from "./mailers.js"
import { IncomingEmail } from "../interfaces/interfaces"

export const receiveEmail: RequestHandler = async (req, res, next) => {
  const date = new Date().toLocaleString()
  const { customerName, email, message }: IncomingEmail = req.body

  try {
    const newEmail = new Email({
      customerName,
      email,
      message,
      date,
    })
    await newEmail.save()
    res.status(201).send({ newEmail, message: "Email successfully sended" })
    sendEmail(email, customerName, message)
    next()
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
    next()
  }
}

export const getEmails: RequestHandler = async (req, res, next) => {
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

export const removeEmail: RequestHandler = async (req, res, next) => {
  const { emailId }: { emailId: string } = req.body
  try {
    await Email.findByIdAndDelete(emailId)
    res
      .status(201)
      .send({ email: req.body, message: "Email successfully deleted" })
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
  }
}
