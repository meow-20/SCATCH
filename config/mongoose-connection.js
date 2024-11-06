const mongoose = require('mongoose');

let connection = mongoose.connect('mongodb://127.0.0.1:27017/scatch')
.then(function(){
    console.log('connected to database!');
})
.catch(function(err){
    console.error(err);
})

module.exports = mongoose.connection;
