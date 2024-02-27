import { Post } from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new Post(post);
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};
