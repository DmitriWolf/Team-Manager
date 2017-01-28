var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var notify = require('./notify');

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

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('home');	
});

http.listen(process.env.PORT || 3002, function(){
  console.log('listening on *:3002');
});