var assert = require('assert');
var app = require('../server.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
// const { get} = require('http');
chai.use(chaiHttp);
let should = chai.should();

describe('Server integration test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });
    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });
    // describe('/product/update', () => {                                            
    //     it('it should update a doc (product)', (done) => {
    //         chai.request(app)
    //             .post('/prod/update').type('form').send({ 'id': 25, 'name': "Test", 'description': 'Test', 'price': 1500, 'units': 20 })
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 console.log("prod/update", res.body);
    //                 // res.body.should.be.a('array');
    //                 res.body.should.have.property('ok');
    //                 done();
    //             });
    //     });
    // });
    describe('/deleteProd', () => {
        it('it should delete a doc (product)', (done) => {
            chai.request(app)
                .post('/prod/delete').type('form').send({'productid': 25})
                .end((err, res) => {
                    console.log(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});