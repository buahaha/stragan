const request = require('supertest');
const chai = require('chai');

const assert = chai.assert;

describe('GET /', () => {
  var app = require('../index').server;

  after(done => {
    app.close();
    done();
  });

  it('should display welcome message', done => {
    request(app)
    .get('/')
    .expect(res => {
      assert.equal(res.text, 'Welcome to Stragan!', 'welcome message');
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      done()
    });
  });
});
