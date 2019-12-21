const express = require('express')
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

app.use(authenticateRoute)
app.use(userRoute)
app.use(pokemonRoute)

server.listen(process.env.PORT || 8082, () => {
  console.log(`Server listening on port`)
})