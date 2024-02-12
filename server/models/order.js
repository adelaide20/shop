const Mongoose = require("mongoose");

// database order schema (table in sql) 
const OrderSchema = new Mongoose.Schema({
    user: {
        type: ObjectID,
        required: true,
        ref: 'users'
    },
    products: [{
        productId: {
            type: ObjectID,
            ref: 'products',
            required: true
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})




// order model holding the schema 
const Order = Mongoose.model("orders", OrderSchema)


module.exports = Order;