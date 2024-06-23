import postsRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";

const app = express();

app.use(
  cors({
    origin: "https://memories-application-frontend.vercel.app",
  })
);
app.use(express.json({ limit: "10mb" }));
app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

const port = process.env.PORT || 5000;
const uri = process.env.URI;
const main = async () => await mongoose.connect(uri);

main().catch((error) => console.log(error));

app.listen(port, () => console.log(`Server running on port: ${port}`));
