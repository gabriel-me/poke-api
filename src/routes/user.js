const express = require('express')
const handleToken = require('../middlewares/handleToken')
const user = require('../controllers/user')

const endpoint = '/api/users'
const router = express.Router()

// Public routes
router.post(endpoint, user.create)

// Authenticated routes
router.put(endpoint, handleToken, user.updateById)

module.exports = router