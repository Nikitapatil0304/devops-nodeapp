var request = require('supertest');
var app = require('../app.js');

describe('GET /', function () {
  it('respond with 404 page not found', function (done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

 
