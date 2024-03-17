import { Post } from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);

    await post.save();

    res.status(201).send(post);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
