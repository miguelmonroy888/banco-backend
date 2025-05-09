const express = require('express');
const router = express.Router();
const { obtenerCuentas } = require('../controllers/cliente.controller');

router.get('/:id/cuentas', obtenerCuentas);

module.exports = router;
