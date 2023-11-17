const TipoProyecto = require('../modelos/tipoProyecto')
const { request, response } = require("express")

/**
 * crear tipo de proyecto
 */
const crearTipoProyecto =  async(req = request, res = response) => {
  // console.log(req.body)

   const {nombre} = req.body
   try {
       const tipoProyectoDB = await TipoProyecto.findOne({ nombre })
       if(tipoProyectoDB){
           return res.status(400).json({mjs: 'ya existe el tipo de proyecto'})
       }
       
       const datos = {
           nombre
       }
   
       const tipoProyecto = new TipoProyecto(datos)
   
       await tipoProyecto.save()
       return res.status(201).json(tipoProyecto)
   } catch (error) {
     console.log(error)  
     return res.status(500).json({msj:error})
   }
   
}
/**
 * consultar todos los tipos de proyectos
 */
const getTipoProyecto =  async(req = request, res = response) => {
 
     
     try {
         const TipoProyectoDB = await TipoProyecto.find()
         
         return res.json(TipoProyectoDB)
     } catch (error) {
       console.log(error)  
       return res.status(500).json({msj:error})
     }
     
  }
/**
 * consultar un tipo de proyecto por su ID
 */
const getTipoProyectoId = async(req= request, res = response)=>{
  try {
    const { id } = req.params
    const query = { _id:id }
    const TipoProyectoDB = await TipoProyecto.findOne({ query })
    return res.json(TipoProyectoDB)
  } catch (error) {
    return res.status(500).json({msj:error})
  }
}


//Actualizar proyecto
 
const updatedTipoProyectoId = async(req= request, res = response)=>{
  try {
    const { id } = req.params
    const { nombre} = req.body
    const data = {
    nombre: nombre,
    fechaActualizacion: new Date()
  }
    const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id,data,{ new:true })
    return res.json(tipoProyecto)
  } catch (error) {
    return res.status(500).json({msj:error})
  }
}

/**
 * Borrar proyecto
 */
const deleteTipoProyectoID = async (req = request, res = response) => {
  // try- catch
  const id = req.params.id;
  const tipoProyecto = await TipoProyecto.findByIdAndDelete(id);
  res.status(204).json(tipoProyecto);
}

module.exports = {
    crearTipoProyecto,
    getTipoProyecto,
    getTipoProyectoId,
    updatedTipoProyectoId,
    deleteTipoProyectoID
}