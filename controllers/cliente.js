const Cliente = require('../modelos/cliente')
const { request, response } = require("express")
const tipoProyecto= require('../modelos/tipoProyecto')


/**
 * crear cliente
 */
const crearCliente =  async(req = request, res = response) => {
    // console.log(req.body)
  
   
     try {
        const data = req.body
        const {nombre,email} = data
         const clienteDB = await Cliente.findOne({data })
         if(clienteDB){
             return res.status(400).json({mjs: 'ya existe el Cliente'})
         }
         
         const datos = {
             nombre,email
         }
     
         const cliente = new Cliente(datos)
     
         await cliente.save()
         return res.status(201).json(cliente)
     } catch (error) {
       console.log(error)  
       return res.status(500).json({msj:error})
     }
     
  }
/**
 * consultar todos los clientes
 */

const getClientes =  async(req = request, res = response) => {
 
     
    try {
        const {estado} = req.query
        const clientes = await Cliente.find({ estado })
        
        return res.json(clientes)
    } catch (error) {
      console.log(error)  
      return res.status(500).json({msj:error})
    }
    
 }
 /**
 * consultar un tipo de proyecto por su ID
 */
const getClienteId = async(req= request, res = response)=>{
    try {
      const { id } = req.params
      const query = { _id:id }
      const clienteDB = await Cliente.findOne({ query })
      return res.json(clienteDB)
    } catch (error) {
      return res.status(500).json({msj:error})
    }
  }
  


/**
 * Actualizar cliente
 */
const updatedCliente = async(req= request, res = response)=>{
    try {
      const { id } = req.params
      const { nombre} = req.body
      const data = {
      nombre: nombre,
      fechaActualizacion: new Date()
    }
      const cliente = await Cliente.findByIdAndUpdate(id,data,{ new:true })
      return res.json(cliente)
    } catch (error) {
      return res.status(500).json({msj:error})
    }
  }
  
/**
 * Borrar cliente
 */
const deleteClienteId = async (req = request, res = response) => {
    // try- catch
    const id = req.params.id;
    const cliente = await Cliente.findByIdAndDelete(id);
    res.status(204).json(cliente);
  }
module.exports = {
    crearCliente,getClientes,updatedCliente,getClienteId,deleteClienteId
}