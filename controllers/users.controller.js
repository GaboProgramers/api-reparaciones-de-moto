// ? Funcoin para Realizar una peticion GET
exports.findUsers = (req, res) => {
    console.log(req.body);
    res.json({
        status: "succses",
        message: "Route - Get con ID Users - Controllers"
    })
}

// ? Funcoin para Realizar una peticion POST
exports.createUser = (req, res) => {
    const { name, email, password, role } = req.body
    console.log(req.body);

    res.json({
        status: "succses",
        message: "Route - POST User - Controllers",
        user: {
            name,
            email,
            password,
            role
        }
    })
}

// ? Funcoin para Realizar una peticion PATCH
exports.updateUser = (req, res) => {
    const { name, email } = req.body
    console.log(req.body);

    res.json({
        status: "succses",
        message: "Route - PATCH User - Controllers",
        user: {
            name,
            email
        }
    })
}

// ? Funcoin para Realizar una peticion DELETE
exports.deleteUser = (req, res) => {
    const { id } = req.params
    console.log(req.params);

    res.json({
        status: "succses",
        message: "Route - DELETE User - Controllers",
        idUser: {
            id
        }
    })
}

