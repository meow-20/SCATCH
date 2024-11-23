const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    password: String,
    email: String,
    contact: Number,
    isAdmin: Boolean,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }],
    orders: {
        type: Array,
        default: []
    },
    picture: String
});

module.exports = mongoose.model('user', userSchema);