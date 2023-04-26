const bodyParser = require('body-parser').json()
const express = require('express')
const User = require('../model/register')

const router = express.Router()

router.post('/',bodyParser, async (req, res)=>{
    try {
        console.log('req.body', req.body);
        const {username, email, password, confirmpassword} = req.body
        if(!username && !email && !password && !confirmpassword) return res.status(402).json('data not found')
        const isEmailExist = await User.findOne({email})
        if(isEmailExist) return res.status(400).json('User Already Exist')
        if(password !== confirmpassword) return res.status(400).json('Password Does not match')
        const newUser = new User({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save()
        return res.status(200).json('Success')
    } catch (error) {
        return res.status(500).json('Internal Server Error value')
    }
})

module.exports = router