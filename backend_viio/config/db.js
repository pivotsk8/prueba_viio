import mongoose from "mongoose";
import colors from 'colors';

export const db = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000, // Ajusta según sea necesario
        })
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(colors.cyan(`MongoDB se conectó correctamente: ${url}`))
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}