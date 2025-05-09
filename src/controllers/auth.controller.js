const pool = require('../db');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT u.id, u.username, r.nombre AS rol FROM usuario u JOIN rol r ON u.rol_id = r.id WHERE u.username = $1 AND u.password = $2',
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    res.json({
      message: 'Login exitoso',
      usuario: result.rows[0]
    });
  } catch (error) {
    console.error('Error en login', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { login };
