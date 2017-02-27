var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp)

var User = require('../models/user')

var user = chai.request.agent(server)

describe('User', function(){
    //LOGIN
    it('should be able to login', function(done) {
        user
            .post('/signup')
            .send({firstName:"name1", lastName:"lame1", email:"test@one.com", password:"password"})
            .end(function (err,res) {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('token');
                done();

            });
    });
});
module.exports = server
