import moongose, { Schema, Document } from "mongoose"

export interface Subscribtion extends Document {
  email: string
}

const subscribtionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
})

export default moongose.model<Subscribtion>("Subscribtion", subscribtionSchema)
