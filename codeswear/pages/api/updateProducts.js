import Product from "@/models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      for (let i = 0; i < req.body.length; i++) {
        let product = await Product.findByIdAndUpdate(
          req.body[i]._id,
          req.body[i],
          { new: true }
        );
      }
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ error: "Wrong request method" }) ;
  }
};

export default connectDB(handler);
