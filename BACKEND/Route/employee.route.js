import express from "express";
import { getEmployee } from "../controller/Employee.controller.js";

const router=express.Router();
router.get("/",getEmployee);

export default router;