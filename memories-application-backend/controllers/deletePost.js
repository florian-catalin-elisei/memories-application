import { Post } from "../models/post.js";

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!_id) return res.status(404).json({ error: "No post with that ID" });

    await Post.findByIdAndDelete(_id);

    res.status(200).send("Post deleted successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
