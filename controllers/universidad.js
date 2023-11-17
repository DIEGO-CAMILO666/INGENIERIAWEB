const Universidad = require('../modelos/universidad')

const crearUniversidad =  async(req = request, res = response) => {
  // console.log(req.body)

 
   try {
      const data = req.body
      const {nombre,direccion,telefono} = data
       const universidadDB = await Universidad.findOne({data })
       if(universidadDB){
           return res.status(400).json({mjs: 'ya existe la Universidad'})
       }
       
       const datos = {
           nombre,direccion,telefono
       }
   
       const universidad = new Universidad(datos)
   
       await universidad.save()
       return res.status(201).json(universidad)
   } catch (error) {
     console.log(error)  
     return res.status(500).json({msj:error})
   }
   
}
/**
* consultar todas las universidades
*/

const getUniversidades =  async(req = request, res = response) => {

   
  try {
      const {estado} = req.query
      const universidad = await Universidad.find({ estado })
      
      return res.json(universidad)
  } catch (error) {
    console.log(error)  
    return res.status(500).json({msj:error})
  }
  
}

/**
*
*/

/**
* Actualizar clienet
*/
/**
* Borrar cliente
*/

module.exports = {
  crearUniversidad,getUniversidades
}