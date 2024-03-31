import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return res.status(400).json({ error: "Invalid Password" });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: "1h" });

    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
