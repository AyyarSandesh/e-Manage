import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    sNo:Number,
    userName:String,
    password:String
});

const User=mongoose.model("Login",userSchema);

export default User;