var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    meno: String,
    priezvisko: String,
    email: String,
    heslo: String,
    verifiedEmail: Boolean
}, {});


module.exports = mongoose.model('users', userSchema);
