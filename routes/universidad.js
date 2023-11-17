const { Router } = require('express')
const{crearUniversidad, getUniversidades} = require('../controllers/universidad')

const router = Router()

/**
 * crear Universidad
 */
router.post('/',crearUniversidad)
/**
 * consultar todas las universidades
 */
router.get('/',getUniversidades)
/**
 * consultar un genero por su ID
 */

/**
 * Actualizar genero
 */
/**
 * Borrar genero
 */

module.exports = {
    crearUniversidad,getUniversidades
}

module.exports = router