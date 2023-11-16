import axios from "axios";

export const productsService = async () => {
    const products = (await axios.get('https://dummyjson.com/carts')).data
    return products
}

