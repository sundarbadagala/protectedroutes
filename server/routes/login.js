const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/login");
require("dotenv").config();

const router = express.Router();

router.post('/', async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) return res.status(400).json('user not found')
        if(user.password !== password) return res.status(400).json('password does not match')
        const payload = {
            user : {
                id : user.id
            }
        }
        jwt.sign(payload, process.env.JWT_KEY, {expiresIn:36000000}, (err, token)=>{
            if(err) throw err
            return res.json({token})
        })
    } catch (error) {
        return res.status(500).json('internal server error')
    }
})

module.exports = router