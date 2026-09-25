// handlers.js - Request controllers & routing logic

const url = require('url');
const storage = require('./storage');
const views = require('./views');

// Helper to parse POST request body data
function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(new URLSearchParams(body));
    });
    req.on('error', err => reject(err));
  });
}

// 1. GET /
function handleHome(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(views.renderHomePage());
}

// 2. POST /add
async function handleAdd(req, res) {
  try {
    const params = await parseRequestBody(req);
    const description = params.get('description');
    const amount = params.get('amount');
    const type = params.get('type');
    const date = params.get('date');

    if (description && amount) {
      storage.addExpense({ description, amount, type, date });
    }

    res.writeHead(302, { Location: '/expenses' });
    res.end();
  } catch (err) {
    console.error('Error adding transaction:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }
}

// 3. GET /expenses
function handleExpenses(req, res) {
  const expenses = storage.loadExpenses();
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(views.renderExpensesPage(expenses));
}

// 4. GET /summary
function handleSummary(req, res) {
  const summary = storage.getSummary();
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(views.renderSummaryPage(summary));
}

// 5. POST /delete or GET /delete?id=...
async function handleDelete(req, res, reqUrl) {
  let targetId = null;

  if (req.method === 'POST') {
    const params = await parseRequestBody(req);
    targetId = params.get('id');
  } else if (req.method === 'GET') {
    const parsedUrl = url.parse(reqUrl, true);
    targetId = parsedUrl.query.id;
  }

  if (targetId) {
    storage.deleteExpense(targetId);
  }

  res.writeHead(302, { Location: '/expenses' });
  res.end();
}

// 6. 404 Not Found
function handleNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <div style="font-family: sans-serif; text-align: center; margin-top: 100px;">
      <h1>404 - Page Not Found</h1>
      <p><a href="/">Back to Home</a></p>
    </div>
  `);
}

module.exports = {
  handleHome,
  handleAdd,
  handleExpenses,
  handleSummary,
  handleDelete,
  handleNotFound
};
