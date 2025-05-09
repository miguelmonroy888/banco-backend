const pool = require('../db');

const obtenerPagosPorObligacion = async (req, res) => {
  const obligacionId = req.params.id;
  try {
    const result = await pool.query(
      'SELECT id, fecha_pago, monto FROM pago WHERE obligacion_id = $1',
      [obligacionId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener pagos', error);
    res.status(500).json({ error: 'Error al obtener pagos' });
  }
};

module.exports = {
  obtenerPagosPorObligacion
};
