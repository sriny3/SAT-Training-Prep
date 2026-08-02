const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5173;
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const server = http.createServer((req, res) => {
  // Serve the SPA - all routes return index.html
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(indexHtml);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ SAT Prep App running at http://localhost:${PORT}`);
  console.log(`Ready to login with demo accounts`);
});
