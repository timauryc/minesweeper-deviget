const chai = require('chai');
const should = chai.should();

const chaiHttp = require('chai-http');

const server = require('../server')

chai.use(chaiHttp);

describe('Server', function () {
    describe('get a new game (GET /game/:difficulty)', function () {
        it('should return a new game with all the info needed')
        it('should allow only allowed difficulties')
    })

    describe('click on the board (Post /game)', function () {
        it('should return the actual game with all the info needed')
        it('should allow only allowed coordinates')
    })
})