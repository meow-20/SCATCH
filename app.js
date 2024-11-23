const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');
// const config = require('config');

const app = express();
require('dotenv').config();

const db = require('./config/mongoose-connection');
const ownerRouter = require('./routes/ownerRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const indexRouter = require('./routes/index');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.set('view engine', 'ejs');

// console.log(process.env.NODE_ENV);
// console.log(process.env.JWT_KEY);

app.get('/', indexRouter);
app.get('/shop', indexRouter);

app.use('/owner', ownerRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);


app.listen('3000');