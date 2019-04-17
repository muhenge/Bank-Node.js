import express from "express";
import bodyParser from "body-parser";
import router from './routers/routers.js'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send({message:"Welcome"})

})
app.use('/API/v1',router)
const port =process.env.PORT || 3306

app.listen(port, ()=> console.log(`Server is running on port ${port}`))

export default app