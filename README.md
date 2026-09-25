# 💰 Personal Expense Tracker

A modern, lightweight, full-stack personal finance web application built with **pure Node.js** and a sleek **glassmorphic dark UI**. Track your income, manage daily expenditures, view financial summaries, and maintain control over your personal budget with zero external npm dependencies.

---

## ✨ Features

- **⚡ Zero External Dependencies**: Powered entirely by Node.js standard libraries (`http`, `url`, `fs`, `path`) for blazing performance and instant startup.
- **🎨 Glassmorphic Dark UI**: Premium user interface with smooth gradients, frosted glass cards, modern Inter typography, and vibrant status badges.
- **📊 Real-time Financial Dashboard**: Instant calculation of **Total Income**, **Total Expenses**, and **Net Balance**.
- **💳 Transaction Logging**: Clean form to add new transactions with descriptions, amounts, income/expense classification, and custom dates.
- **📋 Transaction History**: Filterable, clean table view listing all past financial records with one-click deletion.
- **💾 Persistent JSON Storage**: Automatically syncs transaction data to a local `expenses.json` file storage engine.
- **📱 Fully Responsive**: Optimized layouts that look great on desktops, tablets, and smartphones.

---

## 🏗️ Project Architecture

```
Personal-Expense-Tracker/
├── server.js        # HTTP server entry point and request routing
├── handlers.js      # Request controllers and POST body parser
├── storage.js       # JSON file I/O operations and summary analytics
├── views.js         # Modular HTML & CSS UI rendering engine
├── expenses.json    # Local JSON data store for transactions
├── package.json     # Project configuration and npm scripts
├── .gitignore       # Git ignore rules
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 14.x or higher)
- [Git](https://git-scm.com/)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mahek-9/Personal-Expense-Tracker.git
   cd Personal-Expense-Tracker
   ```

2. **Start the application:**
   ```bash
   npm start
   ```
   *Alternatively, run directly with Node:*
   ```bash
   node server.js
   ```

3. **Open in browser:**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📡 API & Route Overview

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Renders the dashboard and transaction input form |
| `POST` | `/add` | Submits a new income or expense entry |
| `GET` | `/expenses` | Displays all recorded transactions with delete actions |
| `GET` | `/summary` | Shows the comprehensive financial breakdown & statistics |
| `POST` / `GET` | `/delete` | Removes a transaction record by its unique `id` |

---

## 🛠️ Built With

- **Backend**: [Node.js](https://nodejs.org/) (HTTP & File System modules)
- **Frontend**: HTML5, Vanilla CSS3 (Custom Glassmorphism Design System)
- **Database**: Local JSON File Storage (`fs`)

---

## 👤 Author

- **Mahek Prajapat** - [@Mahek-9](https://github.com/Mahek-9)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
