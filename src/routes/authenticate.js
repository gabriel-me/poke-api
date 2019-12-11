const express = require('express')
const authenticate = require('../controllers/authenticate')

const router = express.Router()

router.post('/api/authenticate', authenticate.signInWithEmailAndPassword)

module.exports = router