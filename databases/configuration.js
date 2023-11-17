const mongoose = require('mongoose')



const mongoConn = async () => {
    try{
     await mongoose.connect(process.env.MONGO_URI,{
        
    })
    console.log('conexión OK')
}catch (e){
    console.log('error de conexión', e)
    throw new Error('Error de conexión')
}
}

module.exports = {mongoConn}