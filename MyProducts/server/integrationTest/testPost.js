var assert = require('assert');
var app = require('../server.js');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
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

    describe('/addProd', () => {
        it('it should insert a doc (product)', (done) => {
            chai.request(app)
                .post('/prod/add').type('form').send({'id': 25 ,'name': "iPhone", 'description': 'My description', 'price': 1500, 'units': 20})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('description');
                    res.body.should.have.property('price');
                    res.body.should.have.property('units');
                    // console.log(res.body);
                    done();
                });
        });
    });
});