import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

const {expect} = chai
chai.use(chaiHttp)

describe('signup', ()=>{ 
    it('user should sign up', ()=>{ 
        chai.request(app).post('/API/v1/auth/signup').send(
            {
                email : 'muhe@gmail.com',
                pass : '12345678',
                fname : 'herve',
                lname : 'hello',
                

            }  
        ).end((err,res)=>{
            //console.log(res.body)
            expect ( res.body ).to.be.an('object')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('data')
            expect(res.body.status).to.be.equal(201)
        })
     })
     it('user should sign up', ()=>{ 
        chai.request(app).post('/API/v1/auth/signup').send(
            {
                email : 'muhe@gmail',
                pass : '1234576678',
                fname : 'herve',
                lname : 'hello',
                

            }  
        ).end((err,res)=>{
            //console.log(res.body)
            expect ( res.body ).to.be.an('object')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('error')
            expect(res.body.status).to.be.equal(400)
        })
     })
 })

