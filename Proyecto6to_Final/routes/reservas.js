const express = require('express');
const router = express.Router();
const db = require('../db');

// POST - Registrar reserva
router.post('/', (req, res) => {
  const { nombre_completo, correo_electronico, direccion, numero_tarjeta, fecha_expiracion, cvv } = req.body;
  const sql = 'INSERT INTO reservas (nombre_completo, correo_electronico, direccion, numero_tarjeta, fecha_expiracion, cvv) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre_completo, correo_electronico, direccion, numero_tarjeta, fecha_expiracion, cvv], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reserva registrada correctamente' });
  });
});

// GET - Listar reservas
router.get('/', (req, res) => {
  db.query('SELECT * FROM reservas', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;