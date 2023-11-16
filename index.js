import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { db } from './config/db.js'
import cartRoutes from './routes/cartRoutes.js'
import { ExpressLogableConfig } from 'viio-project-tools';
import { cartService } from './data/cartServices.js'

//Variable de entorno 
dotenv.config()

//Configuracion la app
const app = express()
const logableConfig = new ExpressLogableConfig();
logableConfig.apply(app);

//Leer datos via body
app.use(express.json())

//Conexión a DB
db().then(() => cartService())


//Definir rutas
app.use('/api/cart', cartRoutes)

//Puerto
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(colors.blue('El servidor se esta ejecutando en el puerto:'), colors.blue.bold(PORT))
})