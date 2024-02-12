const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv')

const port = process.env.PORT || 3000

dotenv.config();

var cors = require('cors')


var corsOptions = {
    origin: '*',
    allowCredentials: "true",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// local files import
const connectDB = require("./config/dbConfig");

//Connecting the Database
connectDB();


// basic route for testing
app.get('/', (req, res) => res.send('Hello, Welcome To Sneaker App'))


app.listen(port, () => console.log(`Example app listening on port  ${port}`))