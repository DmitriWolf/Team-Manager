var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router(); 
var entry = require('./routes/entry.js');

// socket.io ---------------------------
io.on('connection', function(socket){
  socket.on('image message', function (msg) {
    io.emit('image message', msg);
  });

  socket.on('entry message', function(entry){
    console.log('entry message: ', entry);
    io.emit('entry message', entry);
  });
});

// handlebars ---------------------------
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
}));

app.get('/', function (req, res) {
	res.render('home');	
});

// get static files ---------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));


// api routing ---------------------------
app.use('/api', router);
router.route("/entry")
    .get(entry.getEntries)
    .post(entry.postEntry);
router.route("/entry/:id")
    .get(entry.getEntry)
    .delete(entry.deleteEntry)
    .put(entry.updateEntry);

// fire up the server ----------------------
http.listen(process.env.PORT || 3002, function(){
  console.log('listening on *:3002');
});

// connect to db ---------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
