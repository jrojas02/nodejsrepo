const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/multiplicar')) {
    const queryParams = url.parse(req.url, true).query;
    const num1 = parseFloat(queryParams.num1);
    const num2 = parseFloat(queryParams.num2);

    if (isNaN(num1) || isNaN(num2)) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: 'Ambos parámetros deben ser numéricos.' }));
    } else {
      const result = num1 * num2;
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ result }));
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Ruta no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});
