const mongoose = require("mongoose");

const Register = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        confirmpassword: {
            type: String,
            required: true,
        },
    },
    { collection: "user-data" }
);

module.exports = mongoose.model("register", Register);
