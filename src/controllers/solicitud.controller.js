const pool = require('../db');

//
const obtenerSolicitudesPorCliente = async (req, res) => {
  const clienteId = req.params.id;
  try {
    const result = await pool.query(
      'SELECT id, tipo, estado FROM solicitud WHERE cliente_id = $1',
      [clienteId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener solicitudes', error);
    res.status(500).json({ error: 'Error al obtener solicitudes' });
  }
};

module.exports = {
  obtenerSolicitudesPorCliente
};

