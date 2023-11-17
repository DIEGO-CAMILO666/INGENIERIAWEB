const { Router } = require('express')
const{crearCliente, getClientes, updatedCliente,getClienteId,deleteClienteId} = require('../controllers/cliente')

const router = Router()

/**
 * crear cliente
 */
router.post('/',crearCliente)
/**
 * consultar todos los clientes
 */
router.get('/',getClientes)

/**
 * consultar un cliente por su ID
 */
router.get('/:id',getClienteId)
/**
 * Actualizar cliente
 */
router.put('/:id',updatedCliente)
/**
 * Borrar cliente
 */
router.delete('/:id',deleteClienteId)

module.exports = {
    crearCliente,getClientes,updatedCliente,getClienteId,deleteClienteId
}

module.exports = router