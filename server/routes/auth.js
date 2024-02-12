const express = require("express")
const router = express.Router()

const { register, login } = require("../ctlr/auth");

// 1. register user 
router.post("/register", register);

// 2. login user 
router.post("/login", login);


module.exports = router