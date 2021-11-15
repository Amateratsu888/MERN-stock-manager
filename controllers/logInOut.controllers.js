const Users = require("../models/users.model")
require("dotenv").config({ path: "../config/.env" })
const bcrypt  = require("bcrypt")
const JWT = require("jsonwebtoken")
// lister les commandes
module.exports.loginPost = async (req, res) => {
    const {login,password} = req.body
    const user = await Users.findOne({login})
    if (user){
        const isMatch = await bcrypt.compare(password,user.password)
        
        if(isMatch){
            const token = await JWT.sign(
                {login},
                process.env.KEY,
                {
                    expiresIn : 10000000000000
                }
            )
            return res.cookie("token",token,{
                httOnly: true ,
                maxAge : 1000000
            }).status(200).json({message : "token generer"})
        
        }else{res.status(401).send({message : "password dont match"})}
    }else{res.status(401).send({message : "login dont match"})}
}

module.exports.logOutGet = async (req,res) =>{
   await res.cookie('token','',{maxAge: 1}).status(200).send({message : "token deleted"})
}