import mongoose from "mongoose"

function validateObjectId(id, res) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('El ID no es valido')
        return res.status(400).json({ msg: error.message })
    }
}

function handleNotFoundError(message, res) {
    const error = new Error(message)
    return res.status(404).json({ msg: error.message })
}

function handleUserError(message = 'Todos los campos son obligatorios', res) {
    const error = new Error(message)
    return res.status(400).json({ msg: error.message })
}

const uniqueId = () => Date.now().toString(32) + Math.random().toString(32).substring(2)

export {
    validateObjectId,
    handleNotFoundError,
    handleUserError,
    uniqueId
}