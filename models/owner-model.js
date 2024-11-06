const mongoose = require("mongoose");

let ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
    },
    username: String,
    password: String,
    email: String,
    picture: String
});

module.exports = mongoose.model('owner', ownerSchema);