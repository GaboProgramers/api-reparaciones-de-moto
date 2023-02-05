// ? instanciamos el requerimiento a Router proveniente de express.
const { Router } = require("express")

// ? Instancia para obtener las Importaciones de Nuestro controlador,
// ? Proveniente de su ruta raiz.
const {
    findRepairs,
    createRepairs,
    updateRepairs,
    deleteRepairs,
    findRepairById
} = require("../controllers/repairs.controller")
const { protect, protectAccountOwner } = require("../middleware/auth/auth.middleware")
const { validRepairById } = require("../middleware/repair.middleware")
const { validRole } = require("../middleware/validRole.middleware")

// ? Generamos una instancia la cual vamos a igualar con Routes,
// ? para el manejo de las rutas y sus respectivas peticiones.
const router = Router()

router.post('/', createRepairs)

router.use(protect)

// ? Seccion para hacer las respectivas peticiones a nuestro servidor.
router.get('/', validRole, protectAccountOwner, findRepairs)

router.get('/:id',
    validRepairById,
    validRole,
    protectAccountOwner,
    findRepairById
)

router.patch('/:id',
    validRepairById,
    validRole,
    protectAccountOwner,
    updateRepairs
)

router.delete('/:id',
    validRepairById,
    validRole,
    protectAccountOwner,
    deleteRepairs
)

// ? Exportamos nuestro modulo, generando un nombre de variable,
// ? a la cual le vamos a pasar como valor el nombre de la instacia que igualamos
// ? anteriormente con Router().
module.exports = {
    repairsRouter: router
}