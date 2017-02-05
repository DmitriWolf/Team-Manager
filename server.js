var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router(); 
var ChatMessage     = require('./src/models/chatMessage');
var Entry     = require('./src/models/entry');

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
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
	res.render('home');	
});

router.route('/chatmessage')
  .post(function(req, res) {    
    var chatMessage = new ChatMessage();      
    chatMessage.name = req.body.name;  

    chatMessage.save(function(err) {
      if (err) {
        console.log('err: ', err);
        res.send(err);
      } 
      res.json({ message: 'ChatMessage created!' });
    });
  });

router.route('/chatmessage')
 .get( (req, res) => {
  ChatMessage.find(function (err, messages) {
    if (err) return console.error(err);
    console.log(messages);
    res.send(messages);
  });
});


router.route('/entry')
  .post(function(req, res) {
    var entry = new Entry();      
    entry.title = req.body.title;  
    entry.author = req.body.author;  
    entry.jobId = req.body.name;  
    entry.body = req.body.body;  
    entry.photo = req.body.photo;  
    entry.tags = req.body.tags;  

    entry.save(function(err) {
    	console.log('saving');
      if (err) {
        console.log('err: ', err);
        res.send(err);
      } 
      res.json({ message: 'Entry created!' });
    });
  });

router.route('/entry')
 .get( (req, res) => {
  Entry.find(function (err, messages) {
    if (err) return console.error(err);
    console.log(messages);
    res.send(messages);
  });
});

http.listen(process.env.PORT || 3002, function(){
  console.log('listening on *:3002');
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


// @todo: use the following to make a test

//   var entry = new EntrySchema();
//   entry.title     = "Plumbing issue";
//   entry.author    = "Dmitri";
//   entry.jobId     = "50168";
//   entry.body      = "Plumbing valve now leaking. Water off to house. Request a plumber asap.";
//   entry.photo     = "https://cdn2.tmbi.com/TFH/Projects/FH10NOV_SHUTOF_01.jpg";
//   entry.tags      = [ "plumbing", "leak", "urgent", "problem" ];

//     entry.save(function(err) {
//       if (err) {
//         // err
//       } 
//       // entry created
//     });
