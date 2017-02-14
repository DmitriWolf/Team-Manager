var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router(); 
var post = require('./routes/post.js');
var Post = require('./src/models/post');
var crypto = require('crypto');

// socket.io ---------------------------
io.on('connection', function(socket){
  socket.on('image message', function (msg) {
    io.emit('image message', msg);
  });

  socket.on('post message', function(post){
    var newPost = new Post(post);
    newPost["_id"] = crypto.randomBytes(14).toString('hex');
    //Save it into the DB.
    newPost.save((err,savedPost) => {
        if(err) {
          io.emit('post message', { title: 'error', description: err });
        }
        else { 
          io.emit('post message', savedPost);
        }
    });
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
router.route("/post")
    .get(post.getPosts)
    .post(post.postPost);
router.route("/post/:id")
    .get(post.getPost)
    .delete(post.deletePost)
    .put(post.updatePost);

// fire up the server ----------------------
http.listen(process.env.PORT || 3002, function(){
  console.log('listening on *:3002');
});

// connect to db ---------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dev');
