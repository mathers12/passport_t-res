var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    meno: String,
    priezvisko: String,
    email: String,
    heslo: String,
    verifiedEmail: Boolean
}, {});


module.exports = mongoose.model('users', userSchema);
