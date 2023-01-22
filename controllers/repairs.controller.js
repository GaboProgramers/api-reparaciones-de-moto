// ? Funcoin para Realizar una peticion GET
exports.findRepairs = (req, res) => {
    console.log(req.body);
    res.json({
        status: "succses",
        message: "Repairs - Get con ID Users - Controllers"
    })
}

// ? Funcoin para Realizar una peticion POST
exports.createRepairs = (req, res) => {
    const { name, email, password, role } = req.body
    console.log(req.body);

    res.json({
        status: "succses",
        message: "Repairs - POST User - Controllers",
        user: {
            name,
            email,
            password,
            role
        }
    })
}

// ? Funcoin para Realizar una peticion PATCH
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

// ? Funcoin para Realizar una peticion DELETE
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

