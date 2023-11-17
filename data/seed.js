import dotenv from 'dotenv'
import axios from 'axios'
import mongoose from 'mongoose';
import colors from 'colors'
import { db } from '../config/db.js'
import Cart from '../models/Cart.js'


dotenv.config()
await db()

async function seedDB() {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const exist = collections.some(collection => collection.name === 'carts');

        if (!exist) {
            const products = (await axios.get('https://dummyjson.com/carts')).data.carts.map(products => products.products).flat();
            await Cart.insertMany(products)
            console.log(colors.red.bold('Datos insertados exitosamente en la colección "carts".'));
        } else {
            console.log(colors.green.bold('La colección "carts" ya existe en la base de datos. No se realizará la inserción.'));
        }

        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

async function clearDB() {
    try {
        await Cart.deleteMany()
        console.log(colors.red('Se eliminaron todos los registros'))
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

process.argv[2] === '--import'
    ? seedDB()
    : clearDB()
