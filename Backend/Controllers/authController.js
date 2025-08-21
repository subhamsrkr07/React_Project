import User from "../Models/userModel.js"
import validator from "validator"
import bcrypt from 'bcryptjs'
import { gentoken } from "../Config/token.js"

export const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"user already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter valid Email"})
        }
        if(password.length<8){
            return res.status(400).json({message:"Enter strong password"})
        }

        let hashPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashPassword})

        let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*1000
        })
        return res.status(201).json(user)
    } 
    catch (error) {
        console.log("Signup error")
        return res.status(500).json({message:`Signup error ${error}`})
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        console.log("Email from request:", email);
        const user = await User.findOne({email})
        console.log("User found:", user);


        if(!user){
            return res.status(400).json({message:"user not found",})
        }
       let isMatch = await bcrypt.compare(password,user.password)
       if(!isMatch){
        return res.status(400).json({message:"Incorrect Password"})
       }
       let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*1000
        })
        return res.status(201).json({message:"login succesfilly"}) 
    }
    catch(error){
         console.error("Login error:", error);
        return res.status(500).json({ message: "login server error" });
    }
}

export const logout=async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(201).json({message:"logout succesfilly"}) 
    } catch (error) {
         console.error("Logout error:", error);
        return res.status(500).json({ message: "logout error" });
    }
}