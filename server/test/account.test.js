import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

const {expect} = chai
chai.use(chaiHttp)

describe('create bank account', ()=>{ 
    it('user should create a bank account', (done)=>{ 
        chai.request(app).post('/API/v1/account').send(
            {
                accountNumber : '12345678',
                fname : 'herve',
                lname : 'hello',
                email : 'muhe@gmail.com',
                type : 'saving'
                
                

            }  
        ).end((error,res)=>{
            console.log(res.body);
            expect( res.body).to.be.an('object');
            expect(res.body).to.have.property('status');
            expect(res.body).to.have.property('data');
            expect(res.body.status).to.be.equal(201);

            if(error){
                expect(res).to.have.status(404);
                res.body.should.have.property('error').that.is.a('string');
            };
            done()
        })

     })

 })

