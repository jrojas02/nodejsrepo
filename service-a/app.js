// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Configurar encabezados de respuesta
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Objeto de ejemplo que se enviará como respuesta
    const responseData = {
      message: '¡Hola! Esto es un servicio Node.js de ejemplo.',
      timestamp: new Date().toISOString()
    };

    // Convertir el objeto a JSON y enviarlo como respuesta
    res.end(JSON.stringify(responseData));
  } else {
    // Si la URL no es "/", devolver un código de estado 404
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Ruta no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
