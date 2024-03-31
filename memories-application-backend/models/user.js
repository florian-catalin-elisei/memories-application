import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = mongoose.model("User", schema);
