import express from "express";
import { getUser } from "../controller/user.controller.js";

const router=express.Router();
router.post("/login",getUser);

export default router;