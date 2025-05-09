const express = require('express');
const cors = require('cors');

const app = express();
//
const authRoutes = require('./routes/auth.routes');
const clienteRoutes = require('./routes/cliente.routes');
const obligacionRoutes = require('./routes/obligacion.routes');
const pagoRoutes = require('./routes/pago.routes');
const solicitudRoutes = require('./routes/solicitud.routes');

app.use(cors());
app.use(express.json());

// Rutas (las agregaremos después)
app.get('/', (req, res) => res.send('API del banco funcionando'));

//
app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/clientes', obligacionRoutes);
app.use('/api', pagoRoutes);
app.use('/api', solicitudRoutes);


module.exports = app;
