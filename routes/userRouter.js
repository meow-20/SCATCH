const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

router.get('/', function(req, res){
    res.send('hey, its working!');
})

router.post('/register', async function(req, res){
    try{
        let { fullname, email, password } = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(401).send("Account already exixts. Please login!");

    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async function(err, hash){
            let createdUser = await userModel.create({
                email,
                fullname,
                password: hash,
            });
            // res.send(createdUser);
            let token = jwt.sign({email, id: createdUser._id}, "secretkey");
            res.cookie('token', token);
        })
    })
    
    }catch(err){
        console.log(err.message);
    }
    // res.send('user created');
})

module.exports = router;