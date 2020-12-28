import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { TokenInterface } from "../interfaces/interfaces"

dotenv.config()

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.get("Authorization").split(" ")[1]
  let decodedToken
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (err) {
    err.statusCode = 401
    throw err
  }
  if (!decodedToken) {
    const error = new Error("Not authenticated")
    res.statusCode = 401
    throw error
  }
  decodedToken as TokenInterface
  req.body.userId = decodedToken.userId
  next()
}
