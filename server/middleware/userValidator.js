import joi from 'joi'

const email = joi.string().email({minDomainAtoms:2}).lowercase().required()
const names = joi.string().regex(/^[A-Za-z]+$/).lowercase().required()
const password = joi.string().min(8).required()

const account = {
    fname : names,
    lname : names,
    pass : password,
    email : email
}
export default () => {
    const valid ={
        abortEarly : false,
        allowUnknown : true
    }
    return (req,res,next) => {
        return joi.validate(req.body, account,valid,(err, data) => {
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
    

