const express = require('express')
const handleUpload = require('../middlewares/handleUpload')
const pokemon = require('../controllers/pokemon')

const endpoint = '/api/pokemons'
const router = express.Router()

// Public routes
router.get(endpoint, pokemon.getAll)
router.get(`${endpoint}/:id`, pokemon.getById)

// Authenticated routes
router.post(endpoint, pokemon.create)
router.put(`${endpoint}/upload/:id`, handleUpload.single('img'), pokemon.uploadFile)
router.put(`${endpoint}/:id`, pokemon.updateById)
router.delete(`${endpoint}/:id`, pokemon.deleteById)

module.exports = router