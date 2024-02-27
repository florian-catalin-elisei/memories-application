import mongoose from "mongoose";

const { Schema } = mongoose;
const schema = new Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  image: String,
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

export const Post = mongoose.model("Post", schema);
