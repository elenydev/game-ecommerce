import moongose from "mongoose";

const { Schema } = moongose;

const subscribtionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

export default moongose.model("Subscribtion", subscribtionSchema);
