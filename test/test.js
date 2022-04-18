const User = require('../controller/models/User')
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp); 

 describe('First Test', () =>{
    it('test welcome', (done) =>{
        chai.request(app)
        .get('/')
        .end((err,res) => {
         res.should.have.status(200);
            done();
        });
});
 })
