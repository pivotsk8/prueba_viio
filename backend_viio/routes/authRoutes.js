import express from "express";
import { register, verifyAccount, login, user } from "../controller/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.get('/verify/:token', verifyAccount)

//Area privada requiere JWT
router.get('/user', authMiddleware, user)
export default router