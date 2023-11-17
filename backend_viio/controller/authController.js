import User from '../models/User.js'
import { handleMissChampsError } from '../utils/index.js'

const register = async (req, res) => {
    if (Object.values(req.body).includes('')) handleMissChampsError(res)

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