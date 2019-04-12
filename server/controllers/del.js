import arr from "../models/user.js"

const del = (req,res) =>{
    const yes = arr.find(found => found.id === parseInt(req.params.id))
   
    if(!yes)
        return res.status(401).json({
            status : 401,
            error : 'ntibyakuze'
        })
    const user = arr.indexOf(yes)

    arr.splice(user)

    return res.status(200).json({
        status : 200,
        msg : "Deleted!"
    })
}
export default del