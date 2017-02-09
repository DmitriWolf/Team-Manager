let mongoose = require('mongoose');
var Post = require('../src/models/post');
/*
 * GET /post route to retrieve all the posts.
 */
function getPosts(req, res) {
    //Query the DB and if no errors, send all the posts
    let query = Post.find({});
    query.exec((err, posts) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(posts);
    });
}

/*
 * POST /post to save a new post.
 */
function postPost(req, res) {
    //Creates a new post
    var newPost = new Post(req.body);
    //Save it into the DB.
    newPost.save((err,post) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Post successfully added!", post });
        }
    });
}

/*
 * GET /post/:id route to retrieve a post given its id.
 */
function getPost(req, res) {
    Post.findById(req.params.id, (err, post) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(post);
    });     
}

/*
 * DELETE /post/:id to delete a post given its id.
 */
function deletePost(req, res) {
    Post.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Post successfully deleted!", result });
    });
}

/*
 * PUT /post/:id to updatea a post given its id
 */
function updatePost(req, res) {
    Post.findById({_id: req.params.id}, (err, post) => {
        if(err) res.send(err);
        Object.assign(post, req.body).save((err, post) => {
            if(err) res.send(err);
            res.json({ message: 'Post updated!', post });
        }); 
    });
}

//export all the functions
module.exports = { getPosts, postPost, getPost, deletePost, updatePost };