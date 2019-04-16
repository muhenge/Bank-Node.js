import arr from "../models/user.js"

const signin = (req,res) =>{
    const yes = arr.find(found => found.email === req.body.email && found.pass === req.body.pass)
    if(!yes)
        return res.status(401).json({
            status : 401,
            error : 'email not found'
        })
    return res.status(200).json({
        status : 200,
        data : yes
    })
}
export default signin