const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: {
      type: string,
      ref: "User",
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    img: {
      type: string,
      required: true,
    },
    category: {
      type: string,
      required: true,
    },
    size: {
      type: string,
    },
    color: {
      type: string,
    },
    price: {
      type: Number,
      required: true,
    },
    availableQty: {
      type: Number,
      required: true,
    },
    slug: {
      type: string,
      required: true,
      unique: true,
    },
    
  },
  { timestamps: true }
);

export default mongoose.models("Product", ProductSchema);
