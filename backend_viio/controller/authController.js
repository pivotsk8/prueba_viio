import User from '../models/User.js'
import colors from 'colors'
import { handleUserError, handleUnauthorizedError } from '../utils/index.js'
import { sendEmailVerification } from '../emails/authEmailService.js'

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
        const { name, email, token } = await user.save()
        sendEmailVerification({ name, email, token })
        res.status(200).json({ msg: 'El usuario se creo correctamente, revisa tu email' })
    } catch (error) {
        console.log(error)
    }
}
const verifyAccount = async (req, res) => {
    const { token } = req.params
    const user = await User.findOne({ token })

    //Verificacion token
    if (!user) handleUnauthorizedError('Hubo un error, token no válido', res)

    //Si token es valido, confima cuenta
    try {
        user.verified = true
        user.token = ''
        await user.save()
        res.json({ msg: 'Usuario Confirmado Correctamente' })
    } catch (error) {
        console.log(colors.red.bold(error))
    }
}
const login = async (req, res) => {
    const { email, password } = req.body

    //Revisar que el usuario existe
    const user = await User.findOne({ email })
    if (!user) {
        handleUnauthorizedError('El usuario no existe', res)
        return
    }

    //Revisar si el usuario confirmo su cuenta
    if (!user.verified) {
        handleUnauthorizedError('Tu cuenta no ha sido confirmada', res)
        return
    }

    //Comprobar el password
    await user.checkPassword(password)
        ? res.json({ msg: 'Usuario Autenticado' })
        : handleUnauthorizedError('El password es incorrecto', res)
}

export {
    register,
    verifyAccount,
    login
}