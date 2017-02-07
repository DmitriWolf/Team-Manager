let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
var Entry = require('../../src/models/Entry');
var mongoose = require('mongoose');

chai.use(chaiHttp);

// empty the test database
// @todo: do this properly
Entry.remove({}, (err) => { });     

describe('Entries', () => {
	let apiurl = 'http://localhost:3002/api';

  let testEntry = {
	  title  : "Correct Routing Test Entry",
	  author : "Mal Brooks",
	  jobId  : "321321",
	  body   : "We are testing a successful post.",
	  photo  : "https://testingPost.jpg",
	  tags   : [ "testing", "post" ]
  }

  /*
  * Test the /POST route
  */

  describe('/POST entry', () => {
      it('it should not post without server-side validation');
    });

  describe('/POST entry', () => {
    it('it should  POST a correct entry', (done) => {
      chai.request(apiurl)
        .post('/entry')
        .send(testEntry)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('entry');
            testEntry._id = res.body.entry["_id"];
            res.body.should.have.property('message').eql('Entry successfully added!');
            message: 
          done();
        });
    });
  });

  /*
  * Test the /GET route
  */
  
  describe('/GET entry', () => {
      it('it should GET all the entries', (done) => {
        chai.request(apiurl)
          .get('/entry')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
            done();
          });
      });
  });
  describe('/GET one entry', () => {
    it('it should GET one (1) single entry', (done) => {
      chai.request(apiurl)
        .get('/entry/' + testEntry._id)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.not.be.a('array');
            res.body.should.have.property('author').eql(testEntry['author']);
          done();
        });
    });
  });
});
