const express = require('express')
const middleware = require('../middleware/jwt.middleware')
const User = require('../model/register')

const router = express.Router()

router.get('/', middleware, async (req, res)=>{
    try {
        const user = await User.findById(req.user.id)
        if(!user) return res.status(400).json('User Not Found')
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json('Server Error')
    }
})

module.exports = router