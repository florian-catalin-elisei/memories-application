import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  author: String,
  date: { type: Date, default: Date.now },
  image: String,
  likes: { type: Number, default: 0 },
  message: String,
  tags: [String],
  title: String,
});

export const Post = mongoose.model("Post", schema);
