import moongose from "mongoose";

const { Schema } = moongose;

const emailSchema = new Schema({
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
});

export default moongose.model("Email", emailSchema);
