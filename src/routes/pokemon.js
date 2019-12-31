const express = require('express')
const handleToken = require('../middlewares/handleToken')
const handleUpload = require('../middlewares/handleUpload')
const pokemon = require('../controllers/pokemon')

const endpoint = '/api/pokemons'
const router = express.Router()

// Public routes
router.get(endpoint, pokemon.getAll)
router.get(`${endpoint}/:id`, pokemon.getById)

// Authenticated routes
router.post(endpoint, handleToken, pokemon.create)
router.post(`${endpoint}/upload`, handleUpload.single('img'), pokemon.uploadFile)
router.put(`${endpoint}/:id`, handleToken, pokemon.updateById)
router.delete(`${endpoint}/:id`, handleToken, pokemon.deleteById)

module.exports = router