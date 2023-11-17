import mongoose from "mongoose";
import { uniqueId } from "../utils";
uniqueId

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    token: {
        type: String,
        default: () => uniqueId,
    },
    verifired: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)

export default User