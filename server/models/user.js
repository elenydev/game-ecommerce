import moongose from "mongoose";

const { Schema } = moongose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  policy: {
    type: Boolean,
    required: true,
  },
});

export default moongose.model("User", userSchema);
