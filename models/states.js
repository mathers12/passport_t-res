var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var statesSchema = new Schema({
	name: String,
	num: Number
},{});

mongoose.model('states', statesSchema);