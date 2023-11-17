const {  Schema, model} = require('mongoose')

const TipoProyectoSchema = Schema({

    nombre:{
        type:String,
        required: [true,' Cliente requerido'],
        unique: true
    },
    fechaCreacion:{
        type: Date, 
        default: new Date(),
    },
    fechaActualizacion:{
        type: Date, 
        default: new Date(),
    }

})

module.exports = model('TipoProyecto',TipoProyectoSchema)

