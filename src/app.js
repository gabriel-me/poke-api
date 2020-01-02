require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const http = require('http')
const database = require('./database/index')
const userRoute = require('./routes/user')
const pokemonRoute = require('./routes/pokemon')
const authenticateRoute = require('./routes/authenticate')

const app = express()
const server = http.createServer(app)

database.connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(authenticateRoute)
app.use(userRoute)
app.use(pokemonRoute)

server.listen(process.env.PORT || 8082)