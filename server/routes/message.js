const express = require('express')
const middleware = require('../middleware/jwt.middleware')
const User = require('../model/register')
const Message = require('../model/message')

const router = express.Router()

router.post('/post', middleware, async (req, res)=>{
    try {
        const {text} = req.body
        const user = await User.findById(req.user.id)
        const newMessage = new Message({
            user : req.user.id,
            username : user.username,
            text: text
        })
        await newMessage.save()
        const allMsg = await Message.find()
        return res.status(200).json(allMsg)
    } catch (error) {
        return res.status(500).json('Internal Server Error')
    }
})

router.get('/all', middleware, async (req, res)=>{
    try {
        const allMsg = await Message.find()
        return res.status(200).json(allMsg)
    } catch (error) {
        return res.status(500).json('Internal server Error')
    }
})

module.exports = router