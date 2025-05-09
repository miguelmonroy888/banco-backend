const pool = require('../db');

// Obtener cuentas de un cliente
const obtenerCuentas = async (req, res) => {
  const clienteId = req.params.id;

  try {
    const result = await pool.query(
      'SELECT id, tipo, saldo FROM cuenta WHERE cliente_id = $1',
      [clienteId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('ERROR en obtener cuentas', error);
    res.status(500).json({ error: 'Error al obtener cuentas' });
  }
};

module.exports = {
  obtenerCuentas
};
