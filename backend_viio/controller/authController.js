import User from '../models/User.js'
import { handleUserError } from '../utils/index.js'

const register = async (req, res) => {
    if (Object.values(req.body).includes('')) handleUserError(undefined, res)

    const { name, email, password } = req.body
    //Evitar registros duplicados
    const userExists = await User.findOne({ email })
    if (userExists) handleUserError('Usuario ya esta registrado', res)

    //Validar extencion del password
    if (password.trim().length < 8) handleUserError('El usuario debe contener 8 caracteres', res)

    //crea al usuario
    try {
        const user = new User(req.body)
        await user.save()
        res.status(200).json({ msg: 'El usuario se creo correctamente, revisa tu email' })
    } catch (error) {
        console.log(error)
    }
}

export {
    register
}