const express = require('express');
const router = express.Router();
const { obtenerPagosPorObligacion } = require('../controllers/pago.controller');

router.get('/obligaciones/:id/pagos', obtenerPagosPorObligacion);

module.exports = router;
