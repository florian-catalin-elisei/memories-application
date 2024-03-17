import { createPost } from "../controllers/createPost.js";
import { deletePost } from "../controllers/deletePost.js";
import { getPosts } from "../controllers/getPosts.js";
import { likePost } from "../controllers/likePost.js";
import { updatePost } from "../controllers/updatePost.js";
import express from "express";

export const router = express.Router();

router.delete("/:id", deletePost);
router.get("/", getPosts);
router.patch("/:id/likePost", likePost);
router.patch("/:id", updatePost);
router.post("/", createPost);
