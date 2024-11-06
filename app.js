const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
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

app.use('/owner', ownerRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);

app.listen('3000');