import mongoose from "mongoose";

const employeeSchema=mongoose.Schema({
    name:String,
    email:String,
    image:String
});

const Employee=mongoose.model("Employee",employeeSchema);

export default Employee;