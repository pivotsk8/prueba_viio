const handlerIdErrorMongoose = async () => {
    const error = await new Error('El ID no es valido')
    return error
}

export {
    handlerIdErrorMongoose
}