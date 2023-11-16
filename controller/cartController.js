import mongoose from 'mongoose'
import { cartService } from '../data/cartServices.js'
import Cart from '../models/Cart.js'
import { handlerIdErrorMongoose } from '../handlers/handlersErrors.js'


const getCarts = async (req, res) => {
    const allProducts = await Cart.find()
    res.status(200).json(allProducts)
}
const getCartsById = async (req, res) => {
    const { id } = req.params

    //Validacion del id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('El ID no es valido')
        return res.status(400).json({ msg: error.message })

    }
    const product = await Cart.findById(id)
    res.status(200).json(product)
}

export {
    getCarts,
    getCartsById
}