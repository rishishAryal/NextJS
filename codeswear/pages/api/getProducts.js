import Product from "../../models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    let products = await Product.find({});
    res.status(200).json(products, { success: true });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

export default connectDB(handler);