import moongose, { Schema, Document } from "mongoose"

export interface User extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  avatar: string
  policy: boolean
}

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  policy: {
    type: Boolean,
    required: true,
  },
})

export default moongose.model<User>("User", userSchema)
