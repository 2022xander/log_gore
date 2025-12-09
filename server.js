const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.port || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta explícita para "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Conexión a SQLite y creación de tabla
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error al conectar con SQLite:', err);
  } else {
    console.log('Conectado a SQLite');
    db.run(`
      CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        precio REAL NOT NULL
      )
    `);
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

