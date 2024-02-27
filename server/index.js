import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/posts.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use("/posts", router);

const port = process.env.PORT || 5000;
const uri = process.env.URI;

mongoose
  .connect(uri)
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((error) => console.log(`MongoDB connection error: ${error.message}`));
