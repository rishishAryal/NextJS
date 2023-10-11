import Product from "@/models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {

    for (let i = 0; i < req.body.length; i++) {
      let product = await new Product({
        title: req.body[i].title,
        description: req.body[i].description,
        img: req.body[i].img,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
        slug: req.body[i].slug,
      });

      try {
        await product.save();
        res.status(200).json({ success: true });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    }

  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};

export default connectDB(handler);
