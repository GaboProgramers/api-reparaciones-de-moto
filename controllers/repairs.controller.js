const Repair = require("../models/repair.model");

// ? Funcion para Realizar una peticion GET
exports.findRepairs = (req, res) => {
    console.log(req.body);
    res.json({
        status: "succses",
        message: "Repairs - Get con ID Users - Controllers"
    })
}

// ? Funcion para Realizar una peticion POST
exports.createRepairs = async (req, res) => {
    const { date, userId } = req.body
    const newRepair = await Repair.create({
        date,
        userId
    })

    res.json({
        status: "succses",
        message: "Repairs - POST User - Controllers",
        newRepair,
    })
}

// ? Funcion para Realizar una peticion PATCH
exports.updateRepairs = (req, res) => {
    const { name, email } = req.body
    console.log(req.body);

    res.json({
        status: "succses",
        message: "Repairs - PATCH User - Controllers",
        user: {
            name,
            email
        }
    })
}

// ? Funcion para Realizar una peticion DELETE
exports.deleteRepairs = (req, res) => {
    const { id } = req.params
    console.log(req.params);

    res.json({
        status: "succses",
        message: "Repairs - DELETE User - Controllers",
        idUser: {
            id
        }
    })
}

