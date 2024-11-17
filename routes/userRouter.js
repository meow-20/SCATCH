const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// const userModel = require('../models/user-model');
const { registerUser, loginUser } = require('../controllers/authController');

router.get('/', function(req, res){
    res.send('hey, its working!');
})

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;