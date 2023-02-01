const User = require("../models/user.model")
const catchAsync = require("../utils/catchAsync")

// ? Funcoin para Realizar una peticion GET
exports.findUsers = catchAsync(async (req, res, next) => {
    const users = await User.findAll({
        where: {
            status: 'available'
        }
    })

    res.json({
        status: "succses",
        message: "usuarios encontrados satisfactoriamente",
        users
    })
})

exports.findUser = catchAsync(async (req, res, next) => {
    const { user } = req

    res.status(200).json({
        status: 'success',
        message: 'Usuario obtenido satisfactoriamente por el id',
        user
    })
})

// ? Funcoin para Realizar una peticion POST
exports.createUser = catchAsync(async (req, res, next) => {
    const { name, email, password, role } = req.body

    const newUser = await User.create({
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password,
        role: role.toLowerCase()
    })

    res.status(200).json({
        status: "succses",
        message: "Usuario creado con exito",
        newUser
    })
})

// ? Funcoin para Realizar una peticion PATCH
exports.updateUser = catchAsync(async (req, res, next) => {
    const { user } = req

    const { name, email } = req.body

    const updateUser = await user.update({
        name,
        email
    })

    res.status(200).json({
        status: "succses",
        message: "Usuario actualizado con exito",
        updateUser
    })
})

// ? Funcoin para Realizar una peticion DELETE
exports.deleteUser = catchAsync(async (req, res, next) => {
    const { user } = req

    await user.update({ status: "disable" })

    res.status(200).json({
        status: "succses",
        message: "el estado del usuario a sido actulizado a disable",
    })
})

