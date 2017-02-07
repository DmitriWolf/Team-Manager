var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router(); 
var ChatMessage     = require('./src/models/chatMessage');
var entry = require('./routes/entry.js');

io.on('connection', function(socket){
  socket.on('image message', function (msg) {
    io.emit('image message', msg);
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
	res.render('home');	
});

app.use('/api', router);
router.route("/entry")
    .get(entry.getEntries)
    .post(entry.postEntry);
router.route("/entry/:id")
    .get(entry.getEntry)
    .delete(entry.deleteEntry)
    .put(entry.updateEntry);

http.listen(process.env.PORT || 3002, function(){
  console.log('listening on *:3002');
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
