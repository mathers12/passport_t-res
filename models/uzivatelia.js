var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    meno: String,
    priezvisko: String,
    email: String,
    heslo: String,
    verifiedEmail: Boolean,
    emailId: String
}, {});


module.exports = mongoose.model('uzivatelia', userSchema);
