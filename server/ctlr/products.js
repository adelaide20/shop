const productsModel = require('../models/products');


// ========== ADD A PRODUCT ==========
exports.addProduct = async(req, res) => {
    // 1. get user data from the body
    const { name, description, image, size, stock, price } = req.body;

    // 2. input validation
    if (!(name || description || image || size || stock || price)) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    // 3. check if user exists
    const checkProduct = await productsModel.findOne({ name });

    // 4. if product exist return error, if not create a one
    try {
        if (checkProduct) {
            res.status(409).json({
                message: "Product already exists",
            });
        } else {
            await productsModel.create({
                name,
                description,
                image,
                size,
                stock,
                price
            }).then((product) =>
                res.status(201).json({
                    message: "Product successfully created",
                    product,
                })
            );
        }

    } catch (error) {
        res.status(401).json({
            message: "An error occurred while adding a product",
            error: error.message
        })
    }

}


// ========== VIEW ALL PRODUCTS ==========
exports.allProducts = (req, res) => {

}


// ========== VIEW ONE PRODUCT ==========
exports.oneProduct = (req, res) => {

}


// ========== UPDATE A PRODUCT ==========
exports.updateProduct = (req, res) => {

}


// ========== DELETE A PRODUCT ==========
exports.deleteProduct = (req, res) => {

}