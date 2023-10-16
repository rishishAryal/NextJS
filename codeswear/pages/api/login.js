import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  res.setHeader("Content-Type", "application/json");

  try {
    const { email, password } = req.body;
    console.log(email, password);
    const checkUser = await User.findOne({ email: email });

    if (!checkUser) {
      res.json({
        success: false,
        message: "User not found",
      });
    }
    if (checkUser.password !== password) {
      res.json({
        success: false,
        message: "Wrong Credentials",
      });
    }
    if (checkUser.password === password) {
      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: checkUser,
      });
    }
  } catch (e) {
    res.json({ message: "Some error occured" });
  }
}

export default connectDB(handler);
