const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'expenses.json');

// Load expenses from JSON file
function loadExpenses() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading expenses file:', err);
  }
  return [];
}

// Save expenses to JSON file
function saveExpenses(expenses) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving expenses file:', err);
    return false;
  }
}

// Add a new transaction
function addExpense({ description, amount, type, date }) {
  const expenses = loadExpenses();
  const newTransaction = {
    id: Date.now().toString(),
    description: description || 'Untitled',
    amount: parseFloat(amount) || 0,
    type: type === 'income' ? 'income' : 'expense',
    date: date || new Date().toISOString().split('T')[0]
  };

  expenses.push(newTransaction);
  saveExpenses(expenses);
  return newTransaction;
}

// Delete a transaction by ID
function deleteExpense(id) {
  const expenses = loadExpenses();
  const filtered = expenses.filter(exp => String(exp.id) !== String(id));
  if (filtered.length !== expenses.length) {
    saveExpenses(filtered);
    return true;
  }
  return false;
}

// Get summary statistics
function getSummary() {
  const expenses = loadExpenses();
  let totalIncome = 0;
  let totalExpense = 0;

  expenses.forEach(exp => {
    const val = Number(exp.amount) || 0;
    if (exp.type === 'income') {
      totalIncome += val;
    } else {
      totalExpense += val;
    }
  });

  const balance = totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    balance,
    count: expenses.length
  };
}

module.exports = {
  loadExpenses,
  saveExpenses,
  addExpense,
  deleteExpense,
  getSummary
};
