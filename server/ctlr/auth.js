const User = require('../models/user')

// USER REGISTRATION
exports.register = async(req, res) => {

    // 1. get user data from the body
    const { name, email, password, role } = req.body;

    // 2. check if the user does not exist
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
        res.status(401).json({
            message: "An error occurred while adding a user",
            error: error.message,
        })
    }


}