var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JobSchema = new Schema({
	_id        : String,
	title      : String,
	address1   : String,
	address2   : String,
	city       : String,
	state      : String,
	zip        : String,
	date       : { type: Date, default: Date.now },
	startDate  : Date,
	supervisor : String,
	installer  : String
	});

module.exports = mongoose.model('job', JobSchema);
