const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  picture: String,
});
//this describes how our mongo db is set up

const Product = models?.Product || model("Product", ProductSchema);
//this is checking if we habve a model to use

export default Product;
