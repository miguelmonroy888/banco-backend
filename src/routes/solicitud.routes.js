const express = require('express');
const router = express.Router();
const { obtenerSolicitudesPorCliente } = require('../controllers/solicitud.controller');


router.get('/clientes/:id/solicitudes', obtenerSolicitudesPorCliente);

module.exports = router;
