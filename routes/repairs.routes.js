// ? instanciamos el requerimiento a Router proveniente de express.
const { Router } = require("express")

// ? Instancia para obtener las Importaciones de Nuestro controlador,
// ? Proveniente de su ruta raiz.
const {
    findRepairs,
    createRepairs,
    updateRepairs,
    deleteRepairs
} = require("../controllers/repairs.controller")

// ? Generamos una instancia la cual vamos a igualar con Routes,
// ? para el manejo de las rutas y sus respectivas peticiones.
const router = Router()

// ? Seccion para hacer las respectivas peticiones a nuestro servidor.
router.get('/', findRepairs)

router.get('/:id', findRepairs)

router.post('/', createRepairs)

router.patch('/:id', updateRepairs)

router.delete('/:id', deleteRepairs)

// ? Exportamos nuestro modulo, generando un nombre de variable,
// ? a la cual le vamos a pasar como valor el nombre de la instacia que igualamos
// ? anteriormente con Router().
module.exports = {
    repairsRouter: router
}