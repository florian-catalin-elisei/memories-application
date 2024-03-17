import { Post } from "../models/post.js";

export const likePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!_id) return res.status(404).json({ error: "No post with that ID" });

    const post = await Post.findById(_id);
    const updatedPost = await Post.findByIdAndUpdate(_id, { likes: post.likes + 1 });

    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
