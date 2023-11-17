const Etapa = require('../modelos/etapa')
const { request, response } = require("express")

const crearEtapa =  async(req = request, res = response) => {
    // console.log(req.body)
  
   
     try {
        const data = req.body
        const {nombre,estado} = data
         const etapaDB = await Etapa.findOne({data })
         if(etapaDB){
             return res.status(400).json({mjs: 'ya existe la etapa'})
         }
         
         const datos = {
             nombre,estado
         }
     
         const etapa= new Etapa(datos)
     
         await etapa.save()
         return res.status(201).json(etapa)
     } catch (error) {
       console.log(error)  
       return res.status(500).json({msj:error})
     }
     
  }
  /**
  * consultar todas las etapas
  */
  
  const getEtapas =  async(req = request, res = response) => {
  
     
    try {
        const {estado} = req.query
        const etapa = await Etapa.find({ estado })
        
        return res.json(etapa)
    } catch (error) {
      console.log(error)  
      return res.status(500).json({msj:error})
    }
    
  }
  
  /**
 * consultar etapa por su ID
 */
const getEtapaId = async(req= request, res = response)=>{
    try {
      const { id } = req.params
      const query = { _id:id }
      const etapaDB = await Etapa.findOne({ query })
      return res.json(etapaDB)
    } catch (error) {
      return res.status(500).json({msj:error})
    }
  }

  
  /**
  * Actualizar etapa
  */
  const updatedEtapaId = async(req= request, res = response)=>{
    try {
      const { id } = req.params
      const { nombre} = req.body
      const data = {
      nombre: nombre,
      fechaActualizacion: new Date()
    }
      const etapa = await Etapa.findByIdAndUpdate(id,data,{ new:true })
      return res.json(etapa)
    } catch (error) {
      return res.status(500).json({msj:error})
    }
  }
  /**
  * Borrar etapa
  */
  const deleteEtapaId = async (req = request, res = response) => {
    // try- catch
    const id = req.params.id;
    const etapa = await Etapa.findByIdAndDelete(id);
    res.status(204).json(etapa);
  }
  
  module.exports = {
    crearEtapa,getEtapas,updatedEtapaId,deleteEtapaId,getEtapaId
  }