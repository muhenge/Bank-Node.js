import arr from "../models/user.js"

const Updated = (req,res) =>{
    const yes = arr.find(found => found.id === parseInt(req.params.id))
   
    if(!yes)
        return res.status(401).json({
            status : 401,
            error : 'ntibyakuze'
        })
        yes.fname = req.body.fname
        

    return res.status(200).json({
        status : 200,
        msg : `Updated to ${yes.fname}`
    })
}
export default Updated