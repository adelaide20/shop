const Mongoose = require("mongoose")


// create a local databe
const localDB = `mongodb://localhost:27017/SneakerApp`

// test connection
const connectDB = async() => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database Connection Successful")

}


module.exports = connectDB