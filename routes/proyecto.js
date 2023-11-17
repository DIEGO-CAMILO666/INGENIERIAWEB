const { Router } = require('express')
const{crearProyecto, getProyectos, updatedProyectoId} = require('../controllers/proyecto')

const router = Router()

/**
 * crear proyecto
 */
router.post('/',crearProyecto)
/**
 * consultar todos los proyectos
 */

router.get('/',getProyectos)
/**
 * Actualizar genero
 */
router.put('/',updatedProyectoId)


module.exports = {
    crearProyecto,getProyectos,updatedProyectoId
}

module.exports = router