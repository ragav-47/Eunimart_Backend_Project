import User from "../model/user";

import bcrypt from 'bcryptjs'
export const getAllUser=async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({ users });
};

export const signup = async(req,res,next)=>{
    const { Firstname,Middlename,Lastname,UserID,Gender,Age,PhoneNumber, email, password }=req.body;
    let existinguser;
    try{
        existinguser=await User.findOne({email})
    }catch(err){
        return console.log(err);
    }
    if(existinguser){
        return res.status(400).json({message:"User Already Exists"});
    }
    const hashedpassword =bcrypt.hashSync(password);
    const user=new User({
        Firstname,
        Middlename,
        Lastname,
        UserID,
        Gender,
        Age,
        PhoneNumber,
        email,
        password:hashedpassword,
    });
    
    try{
        await user.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({user})
}

export const login=async(req,res,next)=>{
    const { email, password }=req.body;
    let existinguser;
    try{
        existinguser=await User.findOne({email})
    }catch(err){
        return console.log(err);
    }
    if(!existinguser){
        return res.status(404).json({message:"Couldn't Find user"});
    }
    const isPasswordCorrect=bcrypt.compareSync(password,existinguser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Login Successful"});
}

