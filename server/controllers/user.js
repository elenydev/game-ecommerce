import User from "../models/user.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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

const sendEmailAfterUserRegister = (userFirstName, email) => {
  const mailOptions = {
    from: "online.gaming.dummy@gmail.com",
    to: email,
    subject: "Online-gaming shop account",
    html: `<h3>Thank you for joining our Online-Gaming ${userFirstName}</h3>
    <br/>
    <div>
    <p>Hi ${userFirstName},</p>
    <p>We are very glad that u decided to join our community. Now you buy our products and enjoy gaming like us.</p>
    <p>Stay tuned for new products and check your email carefully for getting discount codes from us :)</p>
    <br/>
    <br/>
    <small>Have a nice day! Online-Gaming team. You can reply direct to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    }
  });
};

const sendEmailAfterRemindPassword = (email, newPassword) => {
  const mailOptions = {
    from: "online.gaming.dummy@gmail.com",
    to: email,
    subject: "Online-gaming shop account",
    html: `<h3>It looks like you forgot your password</h3>
    <br/>
    <div>
    <p>Hi ${email},</p>
    <p>Your new password is: ${newPassword}. You can now log in and change it for your own :)</p>
    <br/>
    <p>If you doesn't tried to remind your password, immediately contact with us!</p>
    <small>Have a nice day! Online-Gaming team. You can reply direct to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    }
  });
};

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
      const imageUrl = avatar.filename;
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
      res.status(201).send({
        user: {
          firstName,
          lastName,
          email,
          imageUrl,
        },
      });
      sendEmailAfterUserRegister(firstName, email);
    } else {
      res.status(404).send({ message: "User already exist" });
    }
    next();
  } catch (err) {
    res.status(404).send({ errorMessage: "Something went wrong, try again" });
    next(err);
  }
};

export const signIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email: email });
    if (user !== null) {
      await bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (match === true) {
            const { firstName, lastName, email, avatar, _id } = user;
            const token = jwt.sign(
              { email: email, userId: _id.toString() },
              process.env.SECRET,
              { expiresIn: "1h" }
            );
            return res.status(200).send({
              user: {
                firstName,
                lastName,
                email,
                avatar,
                userId: user._id,
              },
              token,
            });
          } else {
            res
              .status(404)
              .send({ message: "Wrong password provided, try again" });
          }
        })
        .catch((err) => console.log(err));
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
    res.status(200).send({ message: "Logged out" });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" });
    next(err);
  }
};

export const changeAvatar = async (req, res, next) => {
  const userEmail = req.body.email;
  const avatar = req.file;
  const imageUrl = avatar.filename;
  const specificUser = await User.findOne({ email: userEmail });
  if (specificUser) {
    try {
      specificUser.avatar = imageUrl;
      await specificUser.save();
      res.status(201).send({ imageUrl, user: specificUser });
      return;
    } catch (err) {
      res.status(400).send({ message: "Something went wrong, try again" });
      next();
    }
  } else {
    res.status(400).send({ message: "Something went wrong, try again" });
    next();
  }
};

export const changePassword = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const newPassword = req.body.newPassword;

  if (password === newPassword) {
    res.status(400).send({ message: "You provided the same password " });
    return;
  }
  if (email === "admin@admin.com") {
    res
      .status(400)
      .send({ message: "You can't change password for admin account :) " });
    return;
  }

  try {
    const user = await User.findOne({ email: email });
    if (user !== null) {
      await bcrypt
        .compare(password, user.password)
        .then(async (match) => {
          if (match === true) {
            const hashedPw = await bcrypt.hash(newPassword, 12);
            user.password = hashedPw;
            await user.save();
            const { firstName, lastName, email, avatar, _id } = user;

            return res.status(201).send({
              user: {
                firstName,
                lastName,
                email,
                avatar,
                userId: _id,
              },
            });
          } else {
            res
              .status(400)
              .send({ message: "Wrong password provided, try again" });
          }
        })
        .catch((err) =>
          res.status(400).send({ message: "Something went wrong, try again" })
        );
    }
    next();
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" });
    next(err);
  }
};


export const remindPassword = async (req, res, next) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const generatedRandomPassword =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      const hashedPw = await bcrypt.hash(generatedRandomPassword, 12);
      user.password = hashedPw;
      await user.save();
      sendEmailAfterRemindPassword(email, generatedRandomPassword);
      res.status(201).send({
        user: {
          email: user.email,
        },
      });
    } else {
      res.status(400).send({ message: "We don't have user with this email" });
    }
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again later" });
  }
};