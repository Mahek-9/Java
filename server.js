// server.js - HTTP Server Entry Point

const http = require('http');
const url = require('url');
const handlers = require('./handlers');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url;
  const parsedUrl = url.parse(reqUrl, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  console.log(`[${new Date().toISOString()}] ${method} ${pathname}`);

  try {
    if (pathname === '/' && method === 'GET') {
      handlers.handleHome(req, res);
    } else if (pathname === '/add' && method === 'POST') {
      await handlers.handleAdd(req, res);
    } else if (pathname === '/expenses' && method === 'GET') {
      handlers.handleExpenses(req, res);
    } else if (pathname === '/summary' && method === 'GET') {
      handlers.handleSummary(req, res);
    } else if (pathname === '/delete' && (method === 'POST' || method === 'GET')) {
      await handlers.handleDelete(req, res, reqUrl);
    } else {
      handlers.handleNotFound(req, res);
    }
  } catch (err) {
    console.error('Unhandled server error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Expense Tracker running at http://localhost:${PORT}`);
});
