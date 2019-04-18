import joi from 'joi'

const email = joi.string().email({minDomainAtoms:2}).lowercase().required()
const names = joi.string().regex(/^[A-Za-z]+$/).lowercase().required()
const account = joi.number().min(8).positive().required()
const type = joi.string().required()
const accountCreated = {
    accountNumber : account ,
    fname : names,
    lname : names,
    email : email,
    type : type,
    //balance : 0
    
}
export default () => {
    const valid ={
        abortEarly : false,
        allowUnknown : true
    }
    return (req,res,next) => {
        return joi.validate(req.body, accountCreated,valid,(err, data) => {
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
    

