const http = require('http');
const http = require('http');
const hostname = '45.77.90.134';
const port = 8090;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello Lonely Guy\n');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});