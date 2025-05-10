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

// Para colaborador
const buscarClientePorDPI = async (req, res) => {
  const dpi = req.params.dpi;
  try {
    const result = await pool.query(
      'SELECT id, nombre, apellido, correo, telefono FROM cliente WHERE dpi = $1',
      [dpi]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al buscar cliente por DPI:', error);
    res.status(500).json({ error: 'Error al buscar cliente' });
  }
};


module.exports = {
  obtenerCuentas,
  buscarClientePorDPI
};
