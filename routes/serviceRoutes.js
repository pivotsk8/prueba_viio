import express from 'express'
import { getAppointmentsByData } from '../controller/appointmentController.js'
import { productsService } from '../data/productsServices.js'


const router = express.Router()

// router.route('/')
//     .get(productsService())

router.get('/', async (req, res) => {
    res.json(await productsService())
})

export default router