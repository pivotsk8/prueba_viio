import express from 'express'
import { getCarts, getCartsById } from '../controller/cartController.js'



const router = express.Router()

router.get('/', getCarts)
router.get('/:id', getCartsById)

export default router