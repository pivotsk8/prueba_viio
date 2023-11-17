import dotenv from 'dotenv'
import axios from 'axios'
import { db } from '../config/db.js'
import Cart from '../models/Cart.js'


dotenv.config()
await db()

async function seedDB() {
    try {
        const products = (await axios.get('https://dummyjson.com/carts')).data.carts.map(products => products.products).flat();
        await Cart.insertMany(products)
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

function clearDB() {
    console.log('desdeclearDB')

}

process.argv[2] === '--import'
    ? seedDB()
    : clearDB()