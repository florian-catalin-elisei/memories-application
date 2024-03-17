import { Post } from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).send(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
