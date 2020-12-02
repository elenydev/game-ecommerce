import moongose from "mongoose";
import Product from "./product.js";

const { Schema } = moongose;

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
});

export default moongose.model("Order", orderSchema);
