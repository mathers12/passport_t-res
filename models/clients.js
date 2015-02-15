var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientsSchema = new Schema({

    firstName: String,
    lastName: String,
    password: String,
    email: String,
    verifiedEmail: Boolean,
    date_of_birth: Date,
    sex: String
},{});

mongoose.model('clients', clientsSchema);