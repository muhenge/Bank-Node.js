import arr from "../models/user.js"

const sign = (req,res)=>{

    try{
        let names = {
            id : arr.length+1,
            email : req.body.email,
            pass:req.body.pass,
            fname : req.body.fname,
            lname : req.body.lname
        };
        arr.push(names);
    
        return res.status(201).json({
            status : 201,
            data : names
    
        });
    }catch(error){
        res.status(400).send({
            status: 400,
            error: error

        })
    }
   
    
}
export default sign;