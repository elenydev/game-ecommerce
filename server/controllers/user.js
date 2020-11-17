import User from "../models/user.js";
import bcrypt from "bcryptjs";
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
  const mailOptions = {
    from: "online-gaming-dummy@gmail.com",
    to: email,
    subject: "Online-gaming shop account",
    text: "It works",
    html: `<h3>Thank you for joining our Online-Gaming ${firstName}</h3>
    <br/>
    <div>
    <p>Hi ${firstName},</p>
    <p>We are very glad that u decided to join our community. Now you buy our products and enjoy gaming like us.</p>
    <p>Stay tuned for new products and check your email carefully for getting discount codes from us :)</p>
    <br/>
    <br/>
    <small>Have a nice day! Online-Gaming team. You can reply direct to this email or catch us on: online.gaming.dummy@gmail.com</small></p>
    </div>`,
  };

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
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log(err);
        }
      });
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
    if (user.length !== 0) {
      await bcrypt
        .compare(password, user[0].password)
        .then((match) => {
          if (match === true) {
            return res.send({
              user: {
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                email: user[0].email,
                avatar: user[0].avatar,
              },
            });
          } else {
            res.send({ message: "Wrong password provided, try again" });
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
    res.json({ message: "Logged out" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
