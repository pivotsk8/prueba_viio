import express from "express";
import { register, verifyAccount, login } from "../controller/authController.js";

const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.get('/verify/:token', verifyAccount)

export default router