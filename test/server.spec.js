const chai = require('chai');
const should = chai.should();

const chaiHttp = require('chai-http');

const server = require('../server')

chai.use(chaiHttp);

describe('Server', function () {
    describe('get a new game (GET /game/:level)', function () {
        it('should return a new beginner game', function (done) {
            chai.request(server)
                .get('/game/beginner')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('numRows')
                    res.body.should.have.property('numColums')
                    res.body.should.have.property('state')
                    res.body.should.have.property('board')
                    res.body.board.should.be.a('array')
                    res.body.numRows.should.equal(10)
                    res.body.numColums.should.equal(10)
                    res.body.board.length.should.equal(res.body.numColums)
                    res.body.board[0].length.should.equal(res.body.numRows)
                    done();
                })
        })

        it('should return a new intermediate game', function (done) {
            chai.request(server)
                .get('/game/intermediate')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('numRows')
                    res.body.should.have.property('numColums')
                    res.body.should.have.property('state')
                    res.body.should.have.property('board')
                    res.body.board.should.be.a('array')
                    res.body.numRows.should.equal(16)
                    res.body.numColums.should.equal(16)
                    res.body.board.length.should.equal(res.body.numColums)
                    res.body.board[0].length.should.equal(res.body.numRows)
                    done();
                })
        })

        it('should return a new expert game', function (done) {
            chai.request(server)
                .get('/game/expert')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('numRows')
                    res.body.should.have.property('numColums')
                    res.body.should.have.property('state')
                    res.body.should.have.property('board')
                    res.body.board.should.be.a('array')
                    res.body.numRows.should.equal(16)
                    res.body.numColums.should.equal(32)
                    res.body.board.length.should.equal(res.body.numColums)
                    res.body.board[0].length.should.equal(res.body.numRows)
                    done();
                })
        })

        it('should allow only allowed difficulties', function (done) {
            chai.request(server)
                .get('/game/beginner')
                .end(function (err, res) {
                    res.should.have.status(400);
                    res.should.not.be.json;
                    done();
                })
        })
    })

    describe('click on the board (Post /game)', function () {
        it('should return the actual game with all the info needed', function (done) {
            chai.request(server)
                .post('/game')
                .send({ 'click': 'left', 'x': 0, 'y':0 })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('numRows')
                    res.body.should.have.property('numColums')
                    res.body.should.have.property('state')
                    res.body.should.have.property('board')
                    res.body.board.should.be.a('array')
                    res.body.numRows.should.equal(16)
                    res.body.numColums.should.equal(32)
                    res.body.board.length.should.equal(res.body.numColums)
                    res.body.board[0].length.should.equal(res.body.numRows)
                    done();
                })
        })
        
        it('should not allow a click if the game has not started', function (done) {
            chai.request(server)
                .post('/game')
                .send({ 'click': 'left', 'x': 0, 'y':1 })
                .end(function (err, res) {
                    res.should.have.status(409);
                    res.should.not.be.json;
                    done();
                })
        })

        it('should allow only valid coordinates', function (done) {
            chai.request(server)
                .post('/game')
                .send({ 'click': 'left', 'x': 50, 'y':-1 })
                .end(function (err, res) {
                    res.should.have.status(400);
                    res.should.not.be.json;
                    done();
                })
        })

        it('should allow only valid clicks', function (done) {
            chai.request(server)
                .post('/game')
                .send({ 'click': 'middle', 'x': 0, 'y':0 })
                .end(function (err, res) {
                    res.should.have.status(400);
                    res.should.not.be.json;
                    done();
                })
        })
    })
})