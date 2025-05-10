const express = require('express');
const router = express.Router();
const { obtenerCuentas } = require('../controllers/cliente.controller');
//Para el colaborador
const { buscarClientePorDPI } = require('../controllers/cliente.controller');


router.get('/:id/cuentas', obtenerCuentas);
router.get('/buscar/:dpi', buscarClientePorDPI);

module.exports = router;
