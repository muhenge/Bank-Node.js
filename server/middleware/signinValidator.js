import joi from 'joi'

const email = joi.string().email({minDomainAtoms:2}).lowercase().required()
const accountSchema = {
    email : email,
    pass : joi.string().min(8).required()
   
}
export default () => {
    const valid ={
        abortEarly : false,
        allowUnknown : true
    }
    return (req,res,next) => {
        return joi.validate(req.body, accountSchema,valid,(err, data) => {
           if(err){

                const errors = [];
                err.details.map((er)=>{
                errors.push({field:er.path[0],message:er.message});
                });

                const error = {
                    status : 400,
                    error : errors
                }
                res.status(400).json(error);
            }else{
                req.body = data;
                next();
            }
        });

    }
}
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

    

