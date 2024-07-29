import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const getUser=async(req,res)=>{
    try {
        const {userName , password}=req.body;
        // console.log(req.body);
        const user=await User.findOne({userName});
        // const isMatch= await ()=>{(password==User.password)};
        if(!user || !(password==user.password)){
            return res.status(400).json({message:"Invalid Username or password"});
        }else{
            res.status(200).json({
                message:"Login successful",
                user:{
                    _id:user._id,
                    userName:user.userName,
                    password:user.password,
                },
            });
        }
    } catch (error) {
        console.log("Error: "+error.message);
        res.status(500).json({message: "Internal server error"});
    }
};