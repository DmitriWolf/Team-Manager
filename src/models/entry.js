var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

console.log('executing Entry.js file');

var EntrySchema = new Schema({
	title      : String,
	author     : String,
	jobId      : String,
	description: String,
	photo      : String,
	date       : { type: Date, default: Date.now },
	tags       : [ String ]
});

module.exports = mongoose.model('entry', EntrySchema);