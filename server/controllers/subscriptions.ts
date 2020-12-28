import { RequestHandler } from "express"
import Subscribtion from "../models/subscription.js"

export const addSubscriber: RequestHandler = async (req, res, next) => {
  const { email }: { email: string } = req.body

  try {
    const alreadySubscribe = await Subscribtion.findOne({ email })
    if (alreadySubscribe) {
      res.status(400).send({ message: "You are already subscriber" })
      return
    }
    const subscriber = new Subscribtion({
      email,
    })
    await subscriber.save()
    res.status(200).send({ subscriber, message: "Subscribtion added" })
    next()
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" })
    next()
  }
}

export const getSubscribtions: RequestHandler = async (req, res, next) => {
  try {
    const subscribers = await Subscribtion.find()
    res
      .status(200)
      .send({ subscribers, message: "Subscribers successfully fetched" })
  } catch (err) {
    res
      .status(404)
      .send({ message: "Something went wrong with fetching subscribtions" })
  }
}

export const removeSubscribtion: RequestHandler = async (req, res, next) => {
  const { email }: { email: string } = req.body
  try {
    await Subscribtion.findOneAndDelete({ email })
    res.status(201).send({
      subscribtion: email,
      message: "Subscribtion successfully deleted",
    })
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" })
  }
}
