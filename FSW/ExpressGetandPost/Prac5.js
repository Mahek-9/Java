const express = require('express');
const app = express();
app.use(express.json());

let users = [{id: 1, name: 'John Doe'}];

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
    const newUser = {id: Date.now(), name: req.body.name};
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({message: 'User Deleted'});
});

app.listen(3000, () => console.log('REST API running on port 3000'));