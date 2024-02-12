const express = require("express")
const router = express.Router()

const { addProduct } = require("../ctlr/products");

// 1. add a product
router.post("/add", addProduct);



module.exports = router