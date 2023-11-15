import express from 'express'
import morgan_1 from "morgan";
import prueba from './routes/prueba.js'
import { ExpressLogableConfig } from 'viio-project-tools';

const app = express()
// const ex = new ExpressLogableConfig()
// app.use(ex, morgan_1)
app.use(express.json())
app.use('/api/api', prueba)
app.listen(4000, () => {
    console.log(`El servidor se esta ejecutando en el puerto: 4000`)
})