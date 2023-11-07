import bcrypt from "bcrypt";
import User from "./models/User.js";

export async function register(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "username and password required" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();

  res.json({ user: newUser });
}

export async function login(req, res) {
  res.json({ message: "Login" });
}
