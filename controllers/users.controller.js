const User = require("../models/user.model")

// ? Funcoin para Realizar una peticion GET
exports.findUsers = async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

exports.findUser = async (req, res) => {
    try {
        const { user } = req

        res.status(200).json({
            status: 'success',
            message: 'Usuario obtenido satisfactoriamente por el id',
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

// ? Funcoin para Realizar una peticion POST
exports.createUser = async (req, res) => {
    try {
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

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

// ? Funcoin para Realizar una peticion PATCH
exports.updateUser = async (req, res) => {
    try {
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

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

// ? Funcoin para Realizar una peticion DELETE
exports.deleteUser = async (req, res) => {
    try {
        const { user } = req

        await user.update({ status: "disable" })

        res.status(200).json({
            status: "succses",
            message: "el estado del usuario a sido actulizado a disable",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

