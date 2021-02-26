const express = require('express');
const router = express.Router();

// Import requireSignin middlewear
const { requireSignin } = require('../controllers/auth.controllers');

let vigilSchema = require('../models/vigil.models');

// Import Controllers
const { viewVigils, createVigil, deleteVigil } = require('../controllers/vigil.controllers')

router.get('/vigils', requireSignin, viewVigils)
//router.post('/vigils/create-vigil', requireSignin, createVigil)
router.delete('/vigils/:_id', requireSignin, deleteVigil)

// Add Vigil
router.route('/vigils/create-vigil', requireSignin, createVigil).post((req, res, next) => {
    vigilSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});




module.exports = router