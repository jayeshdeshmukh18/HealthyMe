const express = require("express");
const {
  addProduct,
  allProducts,
  getProductById,
  updateProductsById,
  deleteProductsById,
  pagination,
  searchProducts,
} = require("../controller/product.controller");
const { Product } = require("../models/product.model");
const productRoute = express.Router();

// Create a new product
productRoute.post("/products", addProduct);

// Get all products
// api -->> localhost:9000/api/products?order=asc;
productRoute.get("/products", allProducts);

// Search for products
productRoute.get("/products/search", searchProducts);

// Pagination features by page no and limit;
// api--->> localhost:9000/api/product/paginate?page=3&limit=10
productRoute.get("/products/paginate", pagination);

// Get a single product by ID
productRoute.get("/products/:id", getProductById);

// Update a product by ID
productRoute.patch("/products/:id", updateProductsById);

// Delete a product by ID
productRoute.delete("/products/:id", deleteProductsById);

module.exports = { productRoute };
