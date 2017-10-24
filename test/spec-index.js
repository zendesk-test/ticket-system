var request = require('supertest');
describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('../app.js');
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/error')
            .expect(404, done);
    });
});