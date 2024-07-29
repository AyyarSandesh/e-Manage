import Employee from "../model/employee.model.js";

export const getEmployee=async (req,res)=>{
    try {
        const employee= await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error);
    }
};