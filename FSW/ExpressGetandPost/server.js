const express = require('express');
const app = express();
const port = 3000;

app.use (express.json());

//Get info from the server
app.get('/user', (req, res) => {
  res.json({
    name: "Sonu",
    age: 26
});
});

//Post info to the server
app.post('/user', (req, res) => {
  const user = req.body;
  res.json({ 
    message: "Hello, Got the information!",
    data: user
   });
});

//connecting to the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
