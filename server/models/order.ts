import moongose, { Schema, Document } from "mongoose"

export interface Order extends Document {
  customerFirstName: string
  customerLastName: string
  customerEmail: string
  products: {
    productName: string
    prize: number
    productImg: string
    amount: number
  }[]
  prize: number
  date: string
  status: string
}

const orderSchema = new Schema({
  customerFirstName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  products: {
    type: [
      {
        productName: String,
        prize: Number,
        productImg: String,
        amount: Number,
      },
    ],
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

export default moongose.model<Order>("Order", orderSchema)
