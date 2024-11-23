const bcrypt = require("bcryptjs");
const {generateToken} = require('../utils/generateToken');
const userModel = require('../models/user-model');

module.exports.registerUser = async function (req, res) {
  try {
    let { fullname, email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (user) return res.status(401).send("Account already exixts. Please login!");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        let createdUser = await userModel.create({
          email,
          fullname,
          password: hash,
        });
        // res.send(createdUser);
        let token = generateToken(createdUser);
        res.cookie("token", token);
        res.send('user created successfully');
      });
    });
  } catch (err) {
    console.log(err.message);
  }
  // res.send('user created');
};

module.exports.loginUser = async function(req, res){
    let { email, password } = req.body;

    let user = await userModel.findOne({email});
    if(!user){
      req.flash('error', 'Email or Password Incorrect');
      res.redirect('/');
    };

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            let token = generateToken(user);
            res.cookie('token', token);
            res.render('shop');
        }else{
            req.flash('error', 'Email or Password Incorrect');
            res.redirect('/');
        }
    })
};

module.exports.logoutUser = async function(req, res){
  res.send('you are log out');
  // req.cookie(token, '');
};