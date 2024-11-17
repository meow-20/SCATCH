const mongoose = require("mongoose");

let ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    products: {
        type: Array,
        default: [],
    },
    gstin: String,
    username: String,
    password: String,
    email: String,
    picture: String
});

module.exports = mongoose.model('owner', ownerSchema);