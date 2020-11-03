import User from "../models/user.js";
import socket from "../socket.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const avatar = req.file;
  const policy = req.body.policy;

  if (!avatar) {
    return res.status(422).send({ message: "Error with avatar occured" });
  }

  try {
    const existingUser = await User.find({ email: email });
    if (existingUser.length === 0) {
      const imageUrl = avatar.path;
      const hashedPw = await bcrypt.hash(password, 12);
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPw,
        avatar: imageUrl,
        policy,
      });
      await user.save();
      res.send({
        user: {
          firstName,
          lastName,
          email,
          imageUrl,
        },
      });
      socket.getIO().emit("user", { action: "createUser", user: user });
    } else {
      res.send({ message: "User already exist" });
    }
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const signIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.find({ email: email });
    if (user.length !== 0 && bcrypt.compare(password, user[0].password)) {
      socket.getIO().emit("user", { action: "getUser", user: user });
      res.send({
        user: {
          firstName: user[0].firstName,
          lastName: user[0].lastName,
          email: user[0].email,
          avatar: user[0].avatar,
        },
      });
    } else {
      res.status(404).send({ message: "User doesn't exist" });
    }
    next();
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" });
    next(err);
  }
};

export const logOut = async (req, res, next) => {
  const id = req.body.id;
  try {
    const user = await User.findById({ _id: id });
    socket.getIO().emit("user", { action: "logOut", user: user });
    res.json({ message: "Logged out" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
