const express = require('express')

const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

app.use(express.json())

app.use(cors({
    origin: '*'
}))

const cliente = require('./routes/cliente')
const tipoProyecto = require('./routes/tipoproyecto')
const universidad = require('./routes/universidad')
const etapa = require('./routes/etapa')

app.use('/api/v1/clientes',cliente)
app.use('/api/v1/tipoProyectos',tipoProyecto)
app.use('/api/v1/universidades',universidad)
app.use('/api/v1/etapas',etapa)


module.exports = app