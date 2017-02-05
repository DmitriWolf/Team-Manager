var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

console.log('executing ChatMessage.js file');

var ChatMessageSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
