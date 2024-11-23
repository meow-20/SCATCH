const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');

router.post('/create', upload.single('image'), async function(req, res){

    let { productname, price, discount, bgcolor, panelcolor, txtcolor } = req.body;

    let product = await productModel.create({
        image: req.file.buffer,
        productname,
        discount,
        price,
        textcolor: txtcolor,
        panelcolor,
        bgcolor
    });
    res.redirect('/owner/admin');
})

module.exports = router;