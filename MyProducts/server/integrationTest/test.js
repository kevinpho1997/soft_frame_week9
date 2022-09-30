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
        // run mongo here to delete things in database
    });
    describe('/getProdList', () => {
        it('it should GET all products', (done) => {
            chai.request(app).get('/prod/getList')
                //.get('./routes/getProdList')
                .end((err, res) => {
                    // should.exist(res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    describe('/addProd', () => {                                            
        it('it should insert a doc (product)', (done) => {
            chai.request(app)
                .post('/prod/add').type('form').send({ 'id': 25, 'name': "iPhone", 'description': 'My description', 'price': 1500, 'units': 20 })
                .end((err, res) => {
                    // test 1
                    res.should.have.status(200);
                    //  test 2
                    res.body.should.have.property('err').to.be.null;
                    done();
                });
        });
        it('it should insert a doc (product)', (done) => {
            chai.request(app)
                .post('/prod/add').type('form').send({ 'id': 25, 'name': "iPhone", 'description': 'My description', 'price': 1500, 'units': 20 })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('err').to.be.equal("Duplicate item");
                    done();
                });
        });
    });
    describe('/prod/count', () => {                                            
        it('it should return product count', (done) => {
            chai.request(app)
            .get('/prod/count')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('count');
                    done();
                });
        });
    });
    describe('/validateID', () => {                                            
        it('it should return a valid ID', (done) => {
            chai.request(app)
            .post('/validateID')
                .end((err, res) => {
                    console.log('res.body = ', res.body);
                    res.should.have.status(200);
                    res.body.should.have.property('success');
                    // res.body.should.have.property('topnum');
                    done();
                });
        });
    });
});