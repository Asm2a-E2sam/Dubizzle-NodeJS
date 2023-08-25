const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: [true, "User Must Have name"],
            minLength: 2,
            maxLength: 40,
        },
        email: {
            type: String,
            required: [true, "User Must have Email"],
            validate: [validator.isEmail, "Please Provide A valid Email"],
            unique: true,
            lowercase: true,
        },

        location: {
            type: String,
            required: [true, "User Must have location"],
        },

        contactInfo: {
            type: String,
            required: [true, "User Must have Mobile Number"],
            validate: {
                validator: function(v) {
                    return /^01[0125]\d{8}$/.test(v);
                },
                message: "Invalid mobile number"
            }
        },

        password: {
            type: String,
            required: true,
            minLength: 8,
        },

        confirmPassword: {
            type: String,
            required: true,
            validate: {
                validator: function (el) {
                    return el === this.password;
                },

                message: "Passwords Are Not The Same",
            },
        },
    },
    {
        timestamps: true,
        collection: "users"
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;

    next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
