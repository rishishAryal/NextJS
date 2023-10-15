import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const email = req.body.email;
    const checkUser = await User.findOne({ email: email });

    if (!checkUser) {
      res.status(400).json({
        success: false,
        message: "The user with this email does not exist",
      });
    }
    if (checkUser.password !== req.body.password) {
      res
        .status(401)
        .json({ success: false, message: "Password is incorrect" });
    }
    if (checkUser.password === req.body.password) {
      res
        .status(200)
        .json({ success: true, message: "Logged in successfully" });
    }
  } catch (e) {
    res.json({ message: "Some error occured" });
  }
}   

export default connectDB(handler);
