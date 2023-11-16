import mongoose from 'mongoose';

// Esquema para productos
const productSchema = mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    quantity: Number,
    total: Number,
    discountPercentage: Number,
    discountedPrice: Number,
    thumbnail: String,
});

// Esquema para carritos
const cartSchema = mongoose.Schema({
    id: Number,
    products: [productSchema], // Un carrito tiene una matriz de productos
    total: Number,
    discountedTotal: Number,
    userId: Number,
    totalProducts: Number,
    totalQuantity: Number,
});

// Modelo de Mongoose para carritos
const Cart = model('Cart', cartSchema);

export default Cart;
