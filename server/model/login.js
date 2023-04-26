const mongoose = require("mongoose");

const Login = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { collection: "user-data" }
);

module.exports = mongoose.model("login", Login);
