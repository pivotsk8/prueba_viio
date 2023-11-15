import express from 'express'
import { api } from '../controlers/api.js'
import { APIRouter } from 'itrm-tools';

// const prueba = APIRouter.call(api)
const router = express.Router()

router.route('/').get(api)




export default router