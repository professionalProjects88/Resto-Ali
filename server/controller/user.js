const {user}=require("../database/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


module.exports={
    signUp:async (req,res)=>{
        try {
            const{name,role,password}=req.body
            const SR=await bcrypt.genSalt()
            const hashedPassword=await bcrypt.hash(password,SR)
            const newUser=await user.create({data:{name,role,password:hashedPassword}})
            res.status(201).json(newUser)   
        } catch (err) {
            throw err
        }
    },
    signIn:async (req,res)=>{
        const {name,password}=req.body
        try {
            const newuser=await user.findUnique({where: {name}})
            if(!newuser){
                return res.status(404).json({error:"User not found"})
            }
            const isValidPassword=await bcrypt.compare(password,newuser.password)
            if(!isValidPassword){
                return res.status(401).json({error:"Invalid password"})
            }
            const token=jwt.sign({id:newuser.id,role:newuser.role},'Xshazam1920',{expiresIn: '1h'})
            res.status(200).json({token})
        } catch (error) {
            res.status(500).json({ error: 'Login failed' })
        }
    }
}