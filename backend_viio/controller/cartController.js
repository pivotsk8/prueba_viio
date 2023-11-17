import Cart from '../models/Cart.js'
import { validateObjectId, handleNotFoundError } from '../utils/index.js'


const getCarts = async (req, res) => {
    try {
        const allProducts = await Cart.find();
        res.status(200).json(allProducts);
    } catch (error) {
        console.log(error)
    }
}

const getCartsById = async (req, res) => {
    const { id } = req.params

    //Validacion del id
    if (validateObjectId(id, res)) return

    //Valido Exitencia 
    const product = await Cart.findById(id)
    if (!product) {
        return handleNotFoundError('El Producto no existe', res)
    }
    res.status(200).json(product)
}

export {
    getCarts,
    getCartsById
}