const express = require('express')
const cors = require('cors')
const http = require('http')
const database = require('./database/index')
const userRoute = require('./routes/user')
const pokemonRoute = require('./routes/pokemon')
const authenticateRoute = require('./routes/authenticate')

database.connect()

const port = 8082
const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(authenticateRoute)
app.use(userRoute)
app.use(pokemonRoute)

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})