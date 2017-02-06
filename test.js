/* eslint-env mocha */
/* eslint-disable max-len */
const expect = require('chai').expect;
const fetch = require('node-fetch');

if (process.env.NODE_ENV === 'testing') require('./server');

describe('Ping-pong server', () => {
  it('should return pong on /ping route', () => {
    return fetch('http://localhost:8080/ping')
      .then(response => Promise.all([ response.text(), response.status ]))
      .then(([ response, status ]) => {
        expect(response).to.equal('Pong');
        expect(status).to.equal(200);
      });
  });
  it('should 404 everything else', () => {
    return fetch('http://localhost:8080/')
      .then(response => Promise.all([ response.text(), response.status ]))
      .then(([ response, status ]) => {
        expect(response).to.equal('Not Found');
        expect(status).to.equal(404);
      });
  });
});
