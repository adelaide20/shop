const productsModel = require('../models/products');


// ========== ADD A PRODUCT ==========
exports.addProduct = async(req, res) => {
    // 1. get user data from the body
    const { SKU, name, description, image, size, stock, price } = req.body;

    // 2. input validation
    if (!(SKU, name || description || image || size || stock || price)) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    // 3. check if user exists
    const checkProduct = await productsModel.findOne({ SKU });

    // 4. if product exist return error, if not create a one
    try {
        if (checkProduct) {
            res.status(409).json({
                message: "Product already added",
            });
        } else {
            await productsModel.create({
                SKU,
                name,
                description,
                image,
                size,
                stock,
                price
            }).then((product) =>
                res.status(201).json({
                    message: "Product successfully added",
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
exports.allProducts = async(req, res) => {
    try {
        const products = await productsModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(401).json({
            message: "An error occurred while adding a product",
            error: error.message
        })
    }
}


// ========== VIEW ONE PRODUCT ==========
exports.oneProduct = async(req, res) => {
    const id = req.body;
    try {
        const product = await productsModel.findOne(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(401).json({
            message: "An error occurred while adding a product",
            error: error.message
        })
    }
}


// ========== UPDATE A PRODUCT ==========
exports.updateProduct = async(req, res) => {

}


// ========== DELETE A PRODUCT ==========
exports.deleteProduct = async(req, res) => {

}