import { signin } from "../controllers/signin.js";
import { signup } from "../controllers/signup.js";
import express from "express";

const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
