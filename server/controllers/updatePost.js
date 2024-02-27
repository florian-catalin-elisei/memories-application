import { Post } from "../models/post.js";
import mongoose from "mongoose";

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that ID");
  }

  const updatedPost = await Post.findByIdAndUpdate(_id, post);
  res.json(updatedPost);
};
