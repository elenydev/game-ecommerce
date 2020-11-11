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
  amount: {
    type: Number,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
});

export default moongose.model("Product", productSchema);
