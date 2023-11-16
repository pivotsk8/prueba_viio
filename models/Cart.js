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


// Modelo de Mongoose para carritos
const Cart = mongoose.model('Cart', productSchema);

export default Cart;
