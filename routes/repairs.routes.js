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
const { protect, protectAccountOwner, restrictTo } = require("../middleware/auth/auth.middleware")
const { validRepairById } = require("../middleware/repair.middleware")

// ? Generamos una instancia la cual vamos a igualar con Routes,
// ? para el manejo de las rutas y sus respectivas peticiones.
const router = Router()

router.post('/', createRepairs)

router.use(protect)

// ? Seccion para hacer las respectivas peticiones a nuestro servidor.
router.get('/',
    restrictTo('employee'),
    findRepairs
)

router.get('/:id',
    validRepairById,
    restrictTo('employee'),
    findRepairById
)

router.patch('/:id',
    validRepairById,
    restrictTo('employee'),
    updateRepairs
)

router.delete('/:id',
    validRepairById,
    restrictTo('employee'),
    deleteRepairs
)

// ? Exportamos nuestro modulo, generando un nombre de variable,
// ? a la cual le vamos a pasar como valor el nombre de la instacia que igualamos
// ? anteriormente con Router().
module.exports = {
    repairsRouter: router
}