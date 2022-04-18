const User = require('../controller/models/user');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp); 

 describe('first test', () =>{
     it('test', (done) =>{
         chai.request(app)
      .get('/')
       .end((err,res) => {
        res.should.have.status(200);
            done();
       });
    });


    it('Landing page', (done) => {

        chai.request(app)
        .get('/') 
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('users through db', (done) => {
        chai.request(app)
        .get('/api/Users')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.length.should.not.be.eql(0);
            done();
        });
    });

    it('Register ', (done) => {
        chai.request(app)
        .get('/users/register')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('registering', (done) => {
        let User = {
            name: "Spongbob",
            email: "spongebob@gmail.com",
            password: "spongebob123!",
            password2: "spongebob123!"
        }

        chai.request(app)
        .post('/users/register')
        .send(User)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('login', (done) => {
        chai.request(app)
        .get('/users/login')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });


    it('login user', (done) => {
        let User = {
            email: "spongebob@gmail.com",
            password: "spongebob123!"
        }

       chai.request(app)
       .post('/users/login')
       .send(User)
       .end((err, res) => {
           res.should.have.status(200);
           done();
       });
   });

   it('Dashboard', (done) => {
    let User = {
        _id: "625bbacce3074897c7ad0957",
    }    
    chai.request(app)
    .get('/dashboard') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
  });
});

   it('user details', (done) => {
    let User = {
        _id: "625bbacce3074897c7ad0957",
    }    
    chai.request(app)
    .get('/api/Users') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
    });
});

   it('Updating user details', (done) => {
    let User = {
        _id: "625bbacce3074897c7ad0957",
        general: "no"
    }

   chai.request(app)
   .put('/api/users/625bbacce3074897c7ad0957')
   .send(User)
   .end((err, res) => {
       res.should.have.status(200);
       done();
   });
}); 

    it('Logout', (done) => {
         let User = {
             _id: "625bbacce3074897c7ad0957",
         }    
    chai.request(app)
    .get('/users/logout') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
    });
    });

})
