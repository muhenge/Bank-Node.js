import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'

const {expect} = chai
chai.use(chaiHttp)

describe('delete', ()=>{ 
    it('user should ', (done)=>{ 
        const id = 1 

        chai.request(app).delete(`/API/v1/user/${id}`)
      
        .end((error,res)=>{
            console.log(res.body);
            
            expect(res.body).to.have.status(200);
            
            if(error){
                expect(res).to.have.status(401);
                res.body.should.have.property('error').that.is.a('string');
            };
            done()
        })

     })

 })

