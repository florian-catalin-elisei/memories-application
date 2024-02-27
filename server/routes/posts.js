import express from "express";
import { getPosts } from "../controllers/getPosts.js";
import { createPost } from "../controllers/createPost.js";
import { updatePost } from "../controllers/updatePost.js";
import { deletePost } from "../controllers/deletePost.js";
import { likePost } from "../controllers/likePost.js";

export const router = express.Router();
router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
