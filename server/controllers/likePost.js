import { Post } from "../models/post.js";
import mongoose from "mongoose";

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that ID");
  }

  const post = await Post.findById(_id);
  const updatedPost = await Post.findByIdAndUpdate(_id, { likes: post.likes + 1 });

  res.json(updatedPost);
};
