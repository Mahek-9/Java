// views.js - UI Generator with HTML & CSS templates

function renderHeader(activePage = 'home') {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Personal Expense Tracker</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        :root {
          --champion-blue: #151130;
          --lavender-tonic: #C8BEFA;
          --lavender-hover: #b0a1f7;
          --bg-color: #151130;
          --card-bg: rgba(28, 22, 60, 0.85);
          --border-color: rgba(200, 190, 250, 0.2);
          --text-primary: #ffffff;
          --text-secondary: #C8BEFA;
          --text-muted: #958ac7;
          --accent-income: #34d399;
          --accent-expense: #f87171;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-primary);
          min-height: 100vh;
          padding: 2.5rem 1rem;
          background-image: 
            radial-gradient(at 15% 15%, rgba(200, 190, 250, 0.12) 0px, transparent 45%),
            radial-gradient(at 85% 85%, rgba(21, 17, 48, 0.8) 0px, transparent 50%);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .title {
          font-size: 2.4rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #C8BEFA 60%, #a494f5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.6rem;
          letter-spacing: -0.02em;
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .nav-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          background: var(--card-bg);
          padding: 0.6rem;
          border-radius: 14px;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .nav-btn {
          padding: 0.65rem 1.4rem;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: 10px;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-btn:hover {
          color: #ffffff;
          background: rgba(200, 190, 250, 0.12);
        }

        .nav-btn.active {
          background: var(--lavender-tonic);
          color: var(--champion-blue);
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(200, 190, 250, 0.35);
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2.2rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
          margin-bottom: 2rem;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 1.4rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        input, select {
          width: 100%;
          padding: 0.85rem 1.1rem;
          background: rgba(15, 11, 35, 0.7);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          font-size: 1rem;
          outline: none;
          transition: all 0.2s ease;
        }

        input:focus, select:focus {
          border-color: var(--lavender-tonic);
          box-shadow: 0 0 0 3px rgba(200, 190, 250, 0.25);
          background: rgba(15, 11, 35, 0.9);
        }

        select option {
          background: var(--champion-blue);
          color: #ffffff;
        }

        .btn-submit {
          width: 100%;
          padding: 0.9rem;
          background: linear-gradient(135deg, var(--lavender-tonic), #a494f5);
          color: var(--champion-blue);
          border: none;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.2s ease;
          margin-top: 0.5rem;
        }

        .btn-submit:hover {
          box-shadow: 0 6px 20px rgba(200, 190, 250, 0.4);
          transform: translateY(-1px);
          background: linear-gradient(135deg, #d3cbff, var(--lavender-tonic));
        }

        /* Table Styles */
        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        th {
          padding: 1.1rem 1rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 1px solid var(--border-color);
        }

        td {
          padding: 1.1rem 1rem;
          border-bottom: 1px solid rgba(200, 190, 250, 0.08);
          font-size: 0.95rem;
        }

        tr:hover td {
          background: rgba(200, 190, 250, 0.05);
        }

        .badge {
          display: inline-block;
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .badge-income {
          background: rgba(52, 211, 153, 0.15);
          color: var(--accent-income);
          border: 1px solid rgba(52, 211, 153, 0.3);
        }

        .badge-expense {
          background: rgba(248, 113, 113, 0.15);
          color: var(--accent-expense);
          border: 1px solid rgba(248, 113, 113, 0.3);
        }

        .amount-income {
          color: var(--accent-income);
          font-weight: 600;
        }

        .amount-expense {
          color: var(--accent-expense);
          font-weight: 600;
        }

        .btn-delete {
          background: rgba(248, 113, 113, 0.1);
          color: var(--accent-expense);
          border: 1px solid rgba(248, 113, 113, 0.3);
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-delete:hover {
          background: var(--accent-expense);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(248, 113, 113, 0.3);
        }

        /* Summary Cards */
        .grid-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.85rem;
          font-weight: 700;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1 class="title">💸 Personal Expense Tracker</h1>
          <p class="subtitle">Track your income, manage expenses & stay financially healthy</p>
        </header>

        <nav class="nav-bar">
          <a href="/" class="nav-btn ${activePage === 'home' ? 'active' : ''}">➕ Add Transaction</a>
          <a href="/expenses" class="nav-btn ${activePage === 'expenses' ? 'active' : ''}">📋 All Transactions</a>
          <a href="/summary" class="nav-btn ${activePage === 'summary' ? 'active' : ''}">📊 Summary</a>
        </nav>
  
  `;
}

function renderFooter() {
  return `
      </div>
    </body>
    </html>
  `;
}

// 1. Home Page View (Add Transaction Form)
function renderHomePage() {
  const today = new Date().toISOString().split('T')[0];
  return renderHeader('home') + `
    <div class="card">
      <h2 style="margin-bottom: 1.5rem; font-size: 1.25rem;">New Transaction</h2>
      <form action="/add" method="POST">
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" id="description" name="description" placeholder="e.g. Salary, Groceries, Rent" required />
        </div>

        <div class="form-group">
          <label for="amount">Amount (₹)</label>
          <input type="number" id="amount" name="amount" placeholder="0.00" step="0.01" min="0.01" required />
        </div>

        <div class="form-group">
          <label for="type">Transaction Type</label>
          <select id="type" name="type" required>
            <option value="expense" selected>Expense (-)</option>
            <option value="income">Income (+)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" id="date" name="date" value="${today}" required />
        </div>

        <button type="submit" class="btn-submit">Save Transaction</button>
      </form>
    </div>
  ` + renderFooter();
}

// 2. All Transactions Page View (with Delete action)
function renderExpensesPage(expenses = []) {
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  let tableContent = '';
  if (sortedExpenses.length === 0) {
    tableContent = `
      <div class="empty-state">
        <p>No transactions recorded yet.</p>
        <p style="margin-top: 0.5rem; font-size: 0.85rem;"><a href="/" style="color: var(--lavender-tonic); text-decoration: none;">Click here to add your first transaction</a></p>
      </div>
    `;
  } else {
    tableContent = `
      <div style="overflow-x: auto;">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
    `;

    sortedExpenses.forEach(exp => {
      const isIncome = exp.type === 'income';
      const formattedAmount = `₹${parseFloat(exp.amount).toFixed(2)}`;

      tableContent += `
        <tr>
          <td>${exp.date}</td>
          <td style="font-weight: 500;">${exp.description}</td>
          <td><span class="badge ${isIncome ? 'badge-income' : 'badge-expense'}">${exp.type}</span></td>
          <td class="${isIncome ? 'amount-income' : 'amount-expense'}">${isIncome ? '+' : '-'}${formattedAmount}</td>
          <td style="text-align: right;">
            <form action="/delete" method="POST" style="display: inline;" onsubmit="return confirm('Are you sure you want to delete &quot;${exp.description}&quot;?');">
              <input type="hidden" name="id" value="${exp.id}" />
              <button type="submit" class="btn-delete">🗑️ Delete</button>
            </form>
          </td>
        </tr>
      `;
    });

    tableContent += `
          </tbody>
        </table>
      </div>
    `;
  }

  return renderHeader('expenses') + `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.25rem;">Transaction History</h2>
        <span style="color: var(--text-secondary); font-size: 0.875rem;">Total: ${expenses.length} records</span>
      </div>
      ${tableContent}
    </div>
  ` + renderFooter();
}

// 3. Summary Page View
function renderSummaryPage(summary = { totalIncome: 0, totalExpense: 0, balance: 0, count: 0 }) {
  const isPositive = summary.balance >= 0;

  return renderHeader('summary') + `
    <div class="grid-summary">
      <div class="stat-card" style="border-left: 4px solid var(--accent-income);">
        <span class="stat-label">Total Income</span>
        <span class="stat-value" style="color: var(--accent-income);">+₹${summary.totalIncome.toFixed(2)}</span>
      </div>

      <div class="stat-card" style="border-left: 4px solid var(--accent-expense);">
        <span class="stat-label">Total Expenses</span>
        <span class="stat-value" style="color: var(--accent-expense);">-₹${summary.totalExpense.toFixed(2)}</span>
      </div>

      <div class="stat-card" style="border-left: 4px solid ${isPositive ? 'var(--accent-income)' : 'var(--accent-expense)'};">
        <span class="stat-label">Net Balance</span>
        <span class="stat-value" style="color: ${isPositive ? 'var(--accent-income)' : 'var(--accent-expense)'};">
          ${isPositive ? '+' : ''}₹${summary.balance.toFixed(2)}
        </span>
      </div>
    </div>

    <div class="card" style="text-align: center;">
      <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Quick Actions</h3>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/" class="nav-btn active" style="display: inline-block;">+ Add New Entry</a>
        <a href="/expenses" class="nav-btn" style="display: inline-block; background: rgba(255,255,255,0.05);">View All Records</a>
      </div>
    </div>
  ` + renderFooter();
}

module.exports = {
  renderHomePage,
  renderExpensesPage,
  renderSummaryPage
};
