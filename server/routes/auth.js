const express = require("express")
const router = express.Router()

const { register } = require("../ctlr/auth");

// 1. register user 
router.post("/register", register);


module.exports = router