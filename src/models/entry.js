var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

console.log('executing Entry.js file');

var Entry = new Schema({
	title : String,
	author: String,
	jobId : String,
	body  : String,
	photo : String,
	date  : { type: Date, default: Date.now },
	tags  : [ String ]
});

module.exports = mongoose.model('Entry', Entry);
