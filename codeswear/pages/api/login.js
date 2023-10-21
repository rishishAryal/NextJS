import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  // res.setHeader("Content-Type", "application/json");

  try {
    const email = req.body.email;
    const password = req.body.password;
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      res.json({
        success: false,
        message: "User not found",
      });
    }
    if (
      CryptoJS.AES.decrypt(checkUser.password, "secret123").toString(
        CryptoJS.enc.Utf8
      ) !== password
    ) {
      res.json({
        success: false,
        message: "Wrong Credentials",
      });
    }
    if (
      CryptoJS.AES.decrypt(checkUser.password, "secret123").toString(
        CryptoJS.enc.Utf8
      ) === password
    ) {
      const token = jwt.sign(
        {
          success: true,
          message: "Logged in successfully",
          user: checkUser,
        },
        "jwtsecret",
        { expiresIn: "2d" }
      );
      res
        .status(200)
        .json({
          token,
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
