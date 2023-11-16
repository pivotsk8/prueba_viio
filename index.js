import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { db } from './config/db.js'
import servicesRoutes from './routes/serviceRoutes.js'
import { ExpressLogableConfig } from 'viio-project-tools';

//Variable de entorno 
dotenv.config()

//Configuracion la app
const app = express()
const logableConfig = new ExpressLogableConfig();
logableConfig.apply(app);
app.use(express.json())

//Conexión a DB
db()

//Definir rutas
app.use('/api/products', servicesRoutes)

//Puerto
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(colors.blue('El servidor se esta ejecutando en el puerto:'), colors.blue.bold(PORT))
})