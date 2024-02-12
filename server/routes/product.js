const express = require("express")
const router = express.Router()

const { addProduct, allProducts } = require("../ctlr/products");

// 1. add a product
router.post("/add", addProduct);

// 2. view all products
router.get("/all", allProducts);


module.exports = router