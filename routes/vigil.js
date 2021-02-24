const express = require('express');
const router = express.Router();

// Import requireSignin middlewear
const { requireSignin } = require('../controllers/auth.controllers');

// Import Controllers
const { viewVigils, createVigil, deleteVigil } = require('../controllers/vigil.controllers')

router.get('/vigils', requireSignin, viewVigils)
router.post('/vigils/create-vigil', requireSignin, createVigil)
router.delete('/vigils/:_id', requireSignin, deleteVigil)




module.exports = router