import mongoose from "mongoose";

export const db = async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true')
        console.log('se conecto')
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}