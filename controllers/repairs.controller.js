const Repair = require("../models/repair.model");

// ? Funcion para Realizar una peticion GET
exports.findRepairs = async (req, res) => {
    try {

        const repair = await Repair.findAll({
            where: {
                status: 'pending'
            }
        })

        res.status(200).json({
            status: "succses",
            message: "reparaciones obtenidas con exito",
            repair
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

exports.findRepairById = async (req, res) => {
    try {
        const { repair } = req

        res.status(200).json({
            status: 'success',
            message: 'reparecion obtenida satisfactoriamente por el id',
            repair
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

// ? Funcion para Realizar una peticion POST
exports.createRepairs = async (req, res) => {
    try {
        const { date, userId } = req.body

        const newRepair = await Repair.create({
            date,
            userId
        })

        res.json({
            status: "succses",
            message: "reparacion creada con exito",
            newRepair
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

// ? Funcion para Realizar una peticion PATCH
exports.updateRepairs = async (req, res) => {
    try {
        const { repair } = req

        await repair.update({ status: 'completed' })

        res.json({
            status: "succses",
            message: "reparacion completada con exito"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

// ? Funcion para Realizar una peticion DELETE
exports.deleteRepairs = async (req, res) => {
    try {
        const { repair } = req

        await repair.update({ status: 'cancelled' })

        res.json({
            status: "succses",
            message: "Reparacion cancelada con exito"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error',
        });
    }
}

