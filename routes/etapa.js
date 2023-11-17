const { Router } = require('express')
const{crearEtapa, getEtapas, updatedEtapaId, getEtapaId,deleteEtapaId} = require('../controllers/etapa')

const router = Router()

/**
 * crear etapa
 */
router.post('/',crearEtapa)
/**
 * consultar todas las etapas
 */
router.get('/',getEtapas)
/**
 * consultar un genero por su ID
 */
router.get('/',getEtapaId)
/**
 * Actualizar genero
 */
router.put('/',updatedEtapaId)
/**
 * Borrar genero
 */
router.delete('/',deleteEtapaId)

module.exports = {
    crearEtapa,getEtapas
}

module.exports = router