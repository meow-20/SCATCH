const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

const bcrypt = require('bcryptjs');


router.get('/admin', function(req, res){
    res.render('createproducts');
})

// create owner only in development phase
// checking the NODE_ENV is development or not
if(process.env.NODE_ENV === "development"){
    router.post('/create', async function(req, res){
        let owner = await ownerModel.find();
        if(owner.length > 0) return res.status(503).send("You cannot create more than one owner.");

        bcrypt.genSalt(10, function(err, salt){
            
        })

        let { fullname, email, password } = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            password,
            email
        });
        res.status(201).send(createdOwner);
    })    
}

module.exports = router;