import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { handleForbiddenError } from '../utils/index.js'

const authMiddleware = async (req, res, next) => {
    let token, decoded, user;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select(
                "-password -verified -token -__v"
            )
        } catch (error) {
            handleForbiddenError('Token no valido ', res)
        }
        next()
    } else {
        handleForbiddenError('Token no valido o inexistente', res)
    }
}

export default authMiddleware 