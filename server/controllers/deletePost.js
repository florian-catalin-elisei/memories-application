import { Post } from "../models/post.js";
import mongoose from "mongoose";

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that ID");
  }

  await Post.findByIdAndDelete(_id);

  res.json({ message: "Post deleted successfully" });
};
