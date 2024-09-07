import { Router } from "express";
import { signup, userInfo,registerUser,login } from "../controllers/User.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const UserRoutes = Router()

UserRoutes.post("/signup" ,signup)
UserRoutes.post("/login" ,login)
UserRoutes.get("/getdata" ,verifyToken,userInfo)
UserRoutes.post("/register" ,verifyToken, registerUser)

export default UserRoutes