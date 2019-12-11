const express = require('express')
const handleToken = require('../middlewares/handleToken')
const pokemon = require('../controllers/pokemon')

const endpoint = '/pokemon'
const router = express.Router()

// Public routes
router.get(endpoint, pokemon.getAll)
router.get(`${endpoint}/:name`, pokemon.getByName)

// Authenticated routes
router.post(endpoint, handleToken, pokemon.create)
router.put(`${endpoint}/:id`, handleToken, pokemon.updateById)
router.delete(`${endpoint}/:id`, handleToken, pokemon.deleteById)

module.exports = router