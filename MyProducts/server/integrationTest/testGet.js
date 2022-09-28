var assert = require('assert');
var app = require('../server.js');

let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Server integration test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('/getProdList', () => {
        it('it should GET all products', (done) => {
            chai.request(app)
                .get('./routes/getProdList')
                .end((err, res) => {
                    // should.exist(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});