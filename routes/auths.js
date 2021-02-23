const express = require('express');
const router = express.Router();

// Import Controllers
const { registerUser, loginUser, adminMiddleware } = require('../controllers/auth.controllers')

// Local Auth
router.post('/signup', registerUser)
router.post('/signin', loginUser)

module.exports = router