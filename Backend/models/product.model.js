const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: [true, "Please provide an image"] },
    description: {
      type: String,
      required:true,
    },
    category: { type: String, required: true},
    rating: { type: Number, required:true},
    price: { type: Number, required:true},
    discount: { type: Number, default: 1 },
    quantity:{
        type: Number, default:1
    },
    userID: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = {Product};
