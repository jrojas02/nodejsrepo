const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '30000',
    user: 'root',
    password: 'Alpha3000',
    database: 'alumnosdb'
});

// Conexión a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

// Middleware para el manejo de JSON
app.use(express.json());

// Endpoint para crear un alumno
app.post('/alumnos', (req, res) => {
    const { nombre, apellido, distrito, telefono, carrera, curso } = req.body;

    // Insertar el alumno en la base de datos
    const query = 'INSERT INTO Alumnos (nombre, apellido, distrito, telefono, carrera, curso) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, distrito, telefono, carrera, curso], (err, result) => {
        if (err) {
            console.error('Error al insertar alumno:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        console.log('Alumno insertado correctamente');
        res.status(201).json({ message: 'Alumno creado correctamente' });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
