import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = await req.body;

  if (!email || !email.includes("@") || !password || !name) {
    return res.status(422).json({ message: "Invalid input" });
  }

  // Check if user with given email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(409)
      .json({ message: "User with this email already exists",success:false });
  }

  const user = await User.create({
    name,
    email,
    password: CryptoJS.AES.encrypt(password, "secret123").toString(),
  });

  const token = jwt.sign(
    {
      success: true,
      message: "Your account has been created",
      user: user,
    },
    "jwtsecret",
    { expiresIn: "2d" }
  );

  return res.status(200).json({
    token,
    success: true,
    message: "Your account has been created",
    user: user,
  });
}

export default connectDB(handler);
