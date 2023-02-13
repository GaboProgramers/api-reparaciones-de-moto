// ? instanciamos el requerimiento a Router proveniente de express.
const { Router } = require("express")
const { check } = require("express-validator")

// ? Instancia para obtener las Importaciones de Nuestro controlador,
// ? Proveniente de su ruta raiz.
const {
    findUsers,
    updateUser,
    deleteUser,
    findUser,
    updatePassword
} = require("../controllers/users.controller")
const { protect, protectAccountOwner } = require("../middleware/auth/auth.middleware")
const { validUserById } = require("../middleware/user.middleware")
const { validateFields } = require("../middleware/validateFild.middleware")

// ? Generamos una instancia la cual vamos a igualar con Routes,
// ? para el manejo de las rutas y sus respectivas peticiones.
const router = Router()

// ? Seccion para hacer las respectivas peticiones a nuestro servidor.
router.get('/', findUsers)

router.get('/:id', validUserById, findUser)

router.use(protect)

router.patch('/:id', [
    check('name', 'name require').not().isEmpty(),
    check('email', 'email require').not().isEmpty(),
    check('email', 'email must be a correct format').isEmail(),
    validateFields,
    validUserById,
    protectAccountOwner
], updateUser)

router.patch('/password/:id', [
    check('currentPassword', 'The current password must be mandatory').not().isEmpty(),
    check('newPassword', 'The new password must be mandatory').not().isEmpty(),
    validateFields,
    validUserById,
    protectAccountOwner
], updatePassword)

router.delete('/:id', validUserById, protectAccountOwner, deleteUser)

// ? Exportamos nuestro modulo, generando un nombre de variable,
// ? a la cual le vamos a pasar como valor el nombre de la instacia que igualamos
// ? anteriormente con Router().
module.exports = {
    userRouter: router
}