const express = require('express');
const router = express.Router();
const { obtenerObligaciones } = require('../controllers/obligacion.controller');

router.get('/:id/obligaciones', obtenerObligaciones);

module.exports = router;
