const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product-model');
const userModel = require('../models/user-model');


router.get('/', function(req, res){
    let error = req.flash('error');
    res.render('index', { error, loggedin: false });
});

router.get('/shop', isLoggedIn, async function(req, res){
    let success = req.flash('success');
    let products = await productModel.find();
    res.render('shop', { products, success });
});

router.get('/cart', isLoggedIn, async function(req, res){
    let user = await userModel.findOne({email: req.user.email}).populate('cart');
    res.render('cart', {user});
});

router.get('/addtocart/:productid', isLoggedIn, async function(req, res){
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash('success', 'Added to Cart');
    res.redirect('/shop');
})

router.get('/logout', isLoggedIn, function(req, res){
    res.render('shop');
})

module.exports = router;