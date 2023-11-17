const { Router } = require('express')
const{crearTipoProyecto, getTipoProyectoId, updatedTipoProyectoId,deleteTipoProyectoID} = require('../controllers/tipoProyecto')
const{getTipoProyecto} = require('../controllers/tipoProyecto')

const router = Router()

/**
 * crear genero
 */
router.post('/',crearTipoProyecto)
/**
 * consultar todos los generos
 */
router.get('/',getTipoProyecto)
/**
 * consultar un tipo de poryecto por su ID
 */
router.get('/:id',getTipoProyectoId)
/**
 * Actualizar genero
 */
router.put('/:id',updatedTipoProyectoId)
/**
 * Borrar genero
 */
router.delete('/:id',deleteTipoProyectoID)

module.exports = {
    crearTipoProyecto,getTipoProyecto,updatedTipoProyectoId,deleteTipoProyectoID
}


module.exports = router