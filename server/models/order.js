import moongose from "mongoose";

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
    type: [String],
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
});

export default moongose.model("Order", orderSchema);
