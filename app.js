const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const db = require('./config/mongoose-connection');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.send('Hello World!');
})

app.listen('3000');