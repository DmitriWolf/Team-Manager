var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema = new Schema({
	title      : String,
	author     : String,
	jobId      : String,
	description: String,
	photo      : String,
	date       : { type: Date, default: Date.now },
	tags       : [ String ]
});

module.exports = mongoose.model('post', PostSchema);