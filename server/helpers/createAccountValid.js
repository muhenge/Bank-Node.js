import joi from 'joi';

exports.validUser = (data)=>{
    const user = {
        accountNumber : joi.string().min(10).required(),
        fname : joi.string().min(1).required(),
        lname : joi.string().min(1).required(),
        email:joi.string().email({minDomainAtoms:2}).required(),

    }
    return joi.validate(data,user)
}
