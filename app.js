const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const config = require('config');

const app = express();

const db = require('./config/mongoose-connection');
const ownerRouter = require('./routes/ownerRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

require('dotenv').config();
// console.log(process.env.NODE_ENV);
// console.log(process.env.JWT_KEY);

app.get('/', function(req, res){
    res.render('index');
})

app.use('/owner', ownerRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

app.listen('3000');