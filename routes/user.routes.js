// ? instanciamos el requerimiento a Router proveniente de express.
const { Router } = require("express")

// ? Instancia para obtener las Importaciones de Nuestro controlador,
// ? Proveniente de su ruta raiz.
const {
    findUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller")

// ? Generamos una instancia la cual vamos a igualar con Routes,
// ? para el manejo de las rutas y sus respectivas peticiones.
const router = Router()

// ? Seccion para hacer las respectivas peticiones a nuestro servidor.
router.get('/', findUsers)

router.get('/:id', findUsers)

router.post('/', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

// ? Exportamos nuestro modulo, generando un nombre de variable,
// ? a la cual le vamos a pasar como valor el nombre de la instacia que igualamos
// ? anteriormente con Router().
module.exports = {
    userRouter: router
}