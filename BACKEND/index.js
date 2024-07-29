import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import employeeRoute from "./Route/employee.route.js";
import loginRoute from "./Route/user.route.js";

const app=express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const MongoUri=process.env.MongoDBURI;
//connect to MongoDB
try{
    mongoose.connect(MongoUri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to mongodb");

}catch(error){
    console.log("error", error);
}

//defining routes
app.use("/employee",employeeRoute);
app.use("/user",loginRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});