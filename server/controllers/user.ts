import { RequestHandler } from "express"
import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {
  sendEmailAfterRemindPassword,
  sendEmailAfterUserRegister,
} from "./mailers.js"
import { User as UserInterface } from "../interfaces/interfaces.js"

export const signUp: RequestHandler = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    policy,
  }: UserInterface = req.body
  const avatar = req.file
  if (!avatar) {
    return res.status(422).send({ message: "Error with avatar occured" })
  }
  try {
    const existingUser = await User.find({ email: email })
    if (existingUser.length === 0) {
      const imageUrl = avatar.filename
      const hashedPw = await bcrypt.hash(password, 12)
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPw,
        avatar: imageUrl,
        policy,
      })
      await user.save()
      res.status(201).send({
        user: {
          firstName,
          lastName,
          email,
          imageUrl,
        },
        message: "User successfully created",
      })
      sendEmailAfterUserRegister(firstName, email)
    } else {
      res.status(404).send({ message: "User already exist" })
    }
    next()
  } catch (err) {
    res.status(404).send({ errorMessage: "Something went wrong, try again" })
    next(err)
  }
}

export const signIn: RequestHandler = async (req, res, next) => {
  const { email, password }: { email: string; password: string } = req.body
  try {
    const user = await User.findOne({ email: email })
    if (user !== null) {
      await bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (match === true) {
            const { firstName, lastName, email, avatar, _id } = user
            const token = jwt.sign(
              { email: email, userId: _id.toString() },
              process.env.SECRET,
              { expiresIn: "1h" }
            )
            return res.status(200).send({
              user: {
                firstName,
                lastName,
                email,
                avatar,
                userId: user._id,
              },
              token,
              message: "Successfull authorization",
            })
          } else {
            res
              .status(404)
              .send({ message: "Wrong password provided, try again" })
          }
        })
        .catch((err) => console.log(err))
    } else {
      res.status(404).send({ message: "User doesn't exist" })
    }
    next()
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" })
    next(err)
  }
}

export const logOut: RequestHandler = async (req, res, next) => {
  const { id }: { id: string } = req.body
  try {
    const user = await User.findById({ _id: id })
    res.status(200).send({ message: "Logged out" })
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
    next(err)
  }
}

export const changeAvatar: RequestHandler = async (req, res, next) => {
  const { userId }: { userId: string } = req.body
  const avatar = req.file
  const imageUrl = avatar.filename
  const specificUser = await User.findById(userId)
  if (specificUser) {
    try {
      specificUser.avatar = imageUrl
      await specificUser.save()
      res.status(201).send({
        imageUrl,
        user: specificUser,
        message: "Avatar succesfully changed",
      })
      return
    } catch (err) {
      res.status(400).send({ message: "Something went wrong, try again" })
      next()
    }
  } else {
    res.status(400).send({ message: "Something went wrong, try again" })
    next()
  }
}

export const changePassword: RequestHandler = async (req, res, next) => {
  const {
    email,
    password,
    newPassword,
  }: { email: string; password: string; newPassword: string } = req.body

  if (password === newPassword) {
    res.status(400).send({ message: "You provided the same password " })
    return
  }
  if (email === "admin@admin.com") {
    res
      .status(400)
      .send({ message: "You can't change password for admin account :) " })
    return
  }
  try {
    const user = await User.findOne({ email: email })
    if (user !== null) {
      await bcrypt
        .compare(password, user.password)
        .then(async (match) => {
          if (match === true) {
            const hashedPw = await bcrypt.hash(newPassword, 12)
            user.password = hashedPw
            await user.save()
            const { firstName, lastName, email, avatar, _id } = user

            return res.status(201).send({
              user: {
                firstName,
                lastName,
                email,
                avatar,
                userId: _id,
              },
              message: "Password successfully changed",
            })
          } else {
            res
              .status(400)
              .send({ message: "Wrong password provided, try again" })
          }
        })
        .catch((err) =>
          res.status(400).send({ message: "Something went wrong, try again" })
        )
    }
    next()
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again" })
    next(err)
  }
}

const generateRandomPassword = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export const remindPassword: RequestHandler = async (req, res, next) => {
  const { email }: { email: string } = req.body
  try {
    const user = await User.findOne({ email: email })
    if (user) {
      const generatedRandomPassword = generateRandomPassword()
      const hashedPw = await bcrypt.hash(generatedRandomPassword, 12)
      user.password = hashedPw
      await user.save()
      sendEmailAfterRemindPassword(email, generatedRandomPassword)
      res.status(201).send({
        user: {
          email: user.email,
        },
        message: "Check your email account for new password",
      })
    } else {
      res.status(400).send({ message: "We don't have user with this email" })
    }
  } catch (err) {
    res.status(400).send({ message: "Something went wrong, try again later" })
  }
}
