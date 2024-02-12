const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


// ========== USER REGISTRATION ==========
exports.register = async(req, res) => {

    // 1. get user data from the body
    const { name, email, password, role } = req.body;

    // 2. input validation
    if (!name || !email || !password) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    // 3. password length
    if (password.length < 6) {
        return res.status(401).json({ message: "Password less than 6 characters" });
    }

    // 4. check if user exists
    const checkUser = await User.findOne({ email: req.body.email });

    // 5. if user exist return error, if not create a user
    try {
        if (checkUser) {
            res.status(409).json({
                message: "User already exists",
            });
        } else {
            await User.create({
                name,
                email,
                password,
                role
            }).then((user) =>
                res.status(201).json({
                    message: "User successfully created",
                    user,
                })
            );
        }

    } catch (error) {
        res.status(500).json({
            message: "An error occurred while adding a user",
            error: error.message
        })
    }


}



// ========== USER LOGIN ==========
exports.login = async(req, res) => {

    // 1. get user data from the body
    const { email, password } = req.body;

    // 2. user validation
    if (!email || !password) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    // 3. check if user exists
    const checkUser = await User.findOne({ email });

    // 4. compare password with db hashed password
    const comparePass = await bcrypt.compare(req.body.password, checkUser.password)

    // 5. user object holding login details
    const user = await new User({
        name: checkUser.name,
        email,
        password: comparePass,
        role: checkUser.role
    })

    // 6. if user doesn't exist or passwords don't match return error, else generate token and login user
    try {
        if (!checkUser || !comparePass) {
            res.status(401).json({
                message: "Email or Password incorrect",
                error: "Invalid user",
            });
        } else {
            // 7. generate token
            const token = jwt.sign({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role

                },
                process.env.JWT_KEY, { expiresIn: 28800 }
            );

            // 8. sucsessful login 
            res.status(201).json({
                message: "login is succesful",
                user,
                token,
            })

        }
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while trying to login",
            error: error.message
        });
    }
}