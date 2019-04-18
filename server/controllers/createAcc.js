import account from "../models/account.js"




const accounts = (req,res)=>{
    let accountData = {
        accountNumber : req.body.accountNumber,
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        type:req.body.type,
        balance : 0
       
    };


    account.push(accountData)

    return res.status(201).json({
        status : 201,
        data : accountData

    });
    
}
export default accounts;