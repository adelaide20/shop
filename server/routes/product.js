const express = require("express")
const router = express.Router()

const { addProduct, allProducts, oneProduct, updateProduct, deleteProduct } = require("../ctlr/products");

// 1. add a product
router.post("/add", addProduct);

// 2. view all products
router.get("/all", allProducts);

// 3. view a specific product by id
router.get("/one/:id", oneProduct);

// 4. update a specific product by id
router.put("/update/:id", updateProduct);

// 5. delete a specific product by id
router.delete("/remove/:id", deleteProduct);

module.exports = router