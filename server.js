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
var job = require('./routes/job.js');
var Job = require('./src/models/job');
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

  socket.on('job message', function(job){
    var newJob = new Job(job);
    newJob["_id"] = crypto.randomBytes(14).toString('hex');
    //Save it into the DB.
    newJob.save((err,savedJob) => {
        if(err) {
          io.emit('job message', { title: 'error', description: err });
        }
        else { 
          io.emit('job message', savedJob);
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
router.route("/job")
    .get(job.getJobs)
    .post(job.postJob);
router.route("/job/:id")
    .get(job.getJob)
    .delete(job.deleteJob)
    .put(job.updateJob);

// fire up the server ----------------------
http.listen(process.env.PORT || 3002, function(){
  console.log('listening on *:3002');
});

// connect to db ---------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dev');
