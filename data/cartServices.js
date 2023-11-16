import Cart from '../models/Cart.js'
import axios from "axios";
import mongoose from 'mongoose';

export const cartService = async () => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const exist = collections.some(collection => collection.name === 'carts');
        if (!exist) {
            const products = (await axios.get('https://dummyjson.com/carts')).data.carts.map(products => products.products).flat();
            const batchSize = 500;
            const batches = [];
            products.forEach((element, index) => {
                if (index % batchSize === 0) {
                    batches.push([]);
                }
                batches[batches.length - 1].push(element);
            });
            for (const batch of batches) {
                await Cart.insertMany(batch);
            }
            console.log('Datos insertados exitosamente en la colección "carts".');
            return
        }
        console.log('La colección "carts" ya existe en la base de datos. No se realizará la inserción.');
    } catch (error) {
        console.log(error)
    }
}

