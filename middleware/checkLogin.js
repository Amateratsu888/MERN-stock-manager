require("dotenv").config({ path: "../config/.env" })
const JWT = require("jsonwebtoken")
module.exports = async (req,res,next)=>{

const token = req.cookies.token
if (!token){
return res.status(401).send({message : "il vous faut un token"})
}
    try{
        const user = await JWT.verify(token,process.env.KEY)
        req.user = user.login
        next()
    }catch (err){
        console.log("erreur erreur ")
    }
}