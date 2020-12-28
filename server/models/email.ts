import moongose, { Schema, Document } from "mongoose"

export interface Email extends Document {
  customerName: string
  email: string
  message: string
  date: string
}

const emailSchema: Schema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})

export default moongose.model<Email>("Email", emailSchema)
