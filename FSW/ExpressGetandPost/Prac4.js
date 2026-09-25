const express = require("express");
const app = express();
app.use(express.json());

app.get('/api/user', (req, res) => {
    res.json({ message: "Send a POST request to this endpoint with user data." });
});

app.post('/api/user', (req, res) => {
    const userData = req.body;
    res.status(200).json({ message: "User data received successfully.", data: userData });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
