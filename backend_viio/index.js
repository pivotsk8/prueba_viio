import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import cartRoutes from './routes/cartRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { ExpressLogableConfig } from 'viio-project-tools';

//Variable de entorno 
dotenv.config()

//Configuracion la app
const app = express()
const logableConfig = new ExpressLogableConfig();
logableConfig.apply(app);

//Leer datos via body
app.use(express.json())

//Conexión a DB
db()

//Configuracion cors
const whiteList = [process.env.FRONTEND_URL]

if (process.argv[2] === '--postman') {
    whiteList.push(undefined)
}

const corsOptions = {
    origin: function name(origin, callback) {

        whiteList.includes(origin)
            ? callback(null, true)
            : callback(colors.red('Origin not allowed by CORS'), false)
    }
}
app.use(cors(corsOptions))

//Definir rutas
app.use('/api/cart', cartRoutes)
app.use('/api/auth', authRoutes)

//Puerto
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(colors.blue('El servidor se esta ejecutando en el puerto:'), colors.blue.bold(PORT))
})