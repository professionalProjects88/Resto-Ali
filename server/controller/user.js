const {admin}=require("../database/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports={
    signUp:async (req,res)=>{
        try {
            const{name,password}=req.body
            const SR=await bcrypt.genSalt()
            const hashedPassword=await bcrypt.hash(password,SR)
            const newUser=await admin.create({data:{name,password:hashedPassword}})
            res.status(201).json(newUser)   
        } catch (err) {
            throw err
        }
    }
}