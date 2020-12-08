import Subscribtion from "../models/subscription.js";

export const addSubscriber = async (req, res, next) => {
  const { email } = req.body

  try {
    const alreadySubscribe = await Subscribtion.findOne({ email });
    if (alreadySubscribe) {
      res.status(400).send({ message: "You are already subscriber" });
      return;
    }
    const subscriber = new Subscribtion({
      email,
    });
    await subscriber.save();
    res.status(200).send({ subscriber, message: "Subscribtion added" })
    next();
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" });
    next();
  }
};

export const getSubscribtions = async (req, res, next) => {
  try {
    const subscribers = await Subscribtion.find();
    res
      .status(200)
      .send({ subscribers, message: "Subscribers successfully fetched" })
  } catch (err) {
    res
      .status(404)
      .send({ message: "Something went wrong with fetching subscribtions" });
  }
};

export const removeSubscribtion = async (req, res, next) => {
  const { email } = req.body
  try {
    await Subscribtion.findOneAndDelete(email);
    res
      .status(201)
      .send({
        subscribtion: email,
        message: "Subscribtion successfully deleted",
      })
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" });
  }
};
