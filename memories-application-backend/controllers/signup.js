import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ error: "Email already exists" });

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, email, password: hashPassword });
    const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_KEY, { expiresIn: "1h" });

    return res.status(200).send({ newUser, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
