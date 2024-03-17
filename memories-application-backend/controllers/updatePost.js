import { Post } from "../models/post.js";

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;

    if (!_id) return res.status(404).json({ error: "No post with that ID" });

    const updatedPost = await Post.findByIdAndUpdate(_id, post);

    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
