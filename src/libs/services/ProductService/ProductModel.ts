import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

export const Product = mongoose.model("Product", ProductSchema);
