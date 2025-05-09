const pool = require('../db');

const obtenerObligaciones = async (req, res) => {
  const clienteId = req.params.id;
  try {
    const result = await pool.query(
      'SELECT id, monto, interes, plazo_meses, estado FROM obligacion WHERE cliente_id = $1',
      [clienteId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener obligaciones', error);
    res.status(500).json({ error: 'Error al obtener obligaciones' });
  }
};

module.exports = {
  obtenerObligaciones
};