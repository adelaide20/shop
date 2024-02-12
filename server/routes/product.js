const express = require("express")
const router = express.Router()

const { addProduct, allProducts, oneProduct } = require("../ctlr/products");

// 1. add a product
router.post("/add", addProduct);

// 2. view all products
router.get("/all", allProducts);

// 3. view a specific product by id
router.get("/:id", oneProduct);

module.exports = router