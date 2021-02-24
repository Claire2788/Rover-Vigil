const express = require('express');
const router = express.Router();

// Import requireSignin middlewear
const { requireSignin } = require('../controllers/auth.controllers');

// Import Controllers
const { viewVigils, createVigil, deleteVigil } = require('../controllers/vigil.controllers')

router.get('/vigil', requireSignin, viewVigils)
router.post('/vigil/new', requireSignin, createVigil)
router.delete('/vigil/:_id', requireSignin, deleteVigil)

module.exports = router