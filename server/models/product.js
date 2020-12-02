import moongose from "mongoose";

const { Schema } = moongose;

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
});

export default moongose.model("Product", productSchema);
