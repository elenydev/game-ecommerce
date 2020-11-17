import Subscribtion from "../models/subscription.js";

export const addSubscriber = async (req, res, next) => {
  const email = req.body.email;

  try {
    const alreadySubscribe = await Subscribtion.findOne({ email });
    if (alreadySubscribe) {
      res.send({ message: "You are already subscriber" });
      return;
    }
    const subscriber = new Subscribtion({
      email,
    });
    await subscriber.save();
    res.send({ subscriber });
    next();
  } catch (err) {
    res.send({ message: "Something went wrong, try again" });
    next();
  }
};

export const getSubscribtions = async (req, res, next) => {
  try {
    const subscribers = await Subscribtion.find();
    res.send({ subscribers });
  } catch (err) {
    res.send({ message: "Something went wrong with fetching subscribtions" });
  }
};

export const removeSubscribtion = async (req, res, next) => {
  const email = req.body.email;
  try {
    await Subscribtion.findOneAndDelete(email);
    res.send({ subscribtion: req.body.email });
  } catch (err) {
    res.send({ message: "Something went wrong, try again" });
  }
};
