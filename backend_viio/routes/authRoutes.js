import express from "express";
import { register, verifyAccount } from "../controller/authController.js";

const router = express.Router()
router.post('/register', register)
router.get('/verify/:token', verifyAccount)

export default router