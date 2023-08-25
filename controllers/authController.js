const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error("Invalid email or password");
        }
        const token = jwt.sign({ userId: user._id }, "654Dubizzle");
        res.status(200).json({
            message: "success",
            token,
        });
    } catch (err) {
        res.status(401).json({
            message: "Login failed",
            error: err.message,
        });
    }
};
