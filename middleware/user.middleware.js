const User = require("../models/user.model");

exports.validUserById = async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await User.findOne({
            where: {
                id,
                status: 'available'
            }
        })

        if (!user) {
            return res.status(404).json({
                status: 'error',
                messaje: 'user not fount'
            })
        }

        req.user = user
        next()

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

exports.validIfExistUserEmail = async (req, res, next) => {
    try {
        const { email } = req.body

        const user = await User.findOne({
            where: {
                email: email.toLowerCase()
            }
        })

        if (user && !user.status) {
            return res.status(400).json({
                status: 'error',
                message:
                    'el usuario ya tiene una cuenta, pero esta desactiva, comuniquese con el admistrador'
            })
        }

        if (user) {
            return res.status(400).json({
                status: 'error',
                message: 'the email user already exists'
            })
        }

        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}