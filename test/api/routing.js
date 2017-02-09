let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
var Post = require('../../src/models/Post');
var mongoose = require('mongoose');

chai.use(chaiHttp);

// empty the test database
// @todo: do this properly
Post.remove({}, (err) => { });     

describe('Posts', () => {
	let apiurl = 'http://localhost:3002/api';

  let testPost = {
	  title  : "Correct Routing Test Post",
	  author : "Mal Brooks",
	  job    : "321321",
	  body   : "We are testing a successful post.",
	  photo  : "https://testingPost.jpg",
	  tags   : [ "testing", "post" ]
  }

  /*
  * Test the /POST route
  */

  describe('/POST post', () => {
      it('it should not post without server-side validation');
    });

  describe('/POST post', () => {
    it('it should  POST a correct post', (done) => {
      chai.request(apiurl)
        .post('/post')
        .send(testPost)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('post');
            testPost._id = res.body.post["_id"];
            res.body.should.have.property('message').eql('Post successfully added!');
            message: 
          done();
        });
    });
  });

  /*
  * Test the /GET route
  */
  
  describe('/GET post', () => {
      it('it should GET all the posts', (done) => {
        chai.request(apiurl)
          .get('/post')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
            done();
          });
      });
  });
  describe('/GET one post', () => {
    it('it should GET one (1) single post', (done) => {
      chai.request(apiurl)
        .get('/post/' + testPost._id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.not.be.a('array');
            res.body.should.have.property('author').eql(testPost['author']);
          done();
        });
    });
  });
});
