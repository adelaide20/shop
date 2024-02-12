const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// database user schema (table in sql) 
const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    role: {
        type: String,
        default: "client",
        required: true,
    },
})


// password hash
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


// user model holding the schema 
const User = Mongoose.model("user", UserSchema)


module.exports = User;