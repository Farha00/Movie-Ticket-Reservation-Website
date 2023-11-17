import { getAllUsers, singup } from "../controllers/user-controller";
import express from "express";

const userRouter = express.Router();

userRouter.get("/",getAllUsers); 
userRouter.post("/signup",singup); 


export default userRouter;