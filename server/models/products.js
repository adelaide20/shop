const Mongoose = require("mongoose");

// database products schema (table in sql) 
const ProductSchema = new Mongoose.Schema({
    SKU: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
    size: [{
        type: Number,
        required: true,
    }],
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        currency: "ZAR",
        required: true,
    },
}, {
    timestamps: true
})




// products model holding the schema 
const Products = Mongoose.model("products", ProductSchema)


module.exports = Products;