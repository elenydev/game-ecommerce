import moongose, { Schema, Document } from "mongoose"

export interface Product extends Document {
  productName: string
  productDescription: string
  gameType: string
  prize: number
  availableAmount: number
  productImg: string
  device: string
  amount: number
}

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  gameType: {
    type: String,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  availableAmount: {
    type: Number,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
})

export default moongose.model<Product>("Product", productSchema)
