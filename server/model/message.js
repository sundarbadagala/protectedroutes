const mongoose = require('mongoose')

const Message = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'register'
        },
        username: {
            type: String,
            required: true
        },
        text: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    { collection: "user-messages" }
)

module.exports = mongoose.model('message', Message)