const express = require('express');
const cors = require('cors')
const db = require('./src/db')
const User = require('./src/UserSchema')
const app = express();
const port = 3002;

app.use(cors())
app.use(express.json());

let users = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
  { id: 2, firstName: 'Alice', lastName: 'Smith', age: 30 },
  { id: 3, firstName: 'leone', lastName: 'cWCFV', age: 30 },
];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});


// Get a single user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// Add a new user
app.post('/api/users', (req, res) => {
  
  const { firstName, lastName, age } = req.body;
  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
app.delete('/api/users', (req, res)=>{
  const userId = req.query.id
  const deteleUser = User.findByIdAndDelete(userId)
})

// Update an existing user by ID
app.put('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  const { firstName, lastName, age } = req.body;
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.age = age || user.age;

  res.json(user);
});
console.log(users);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
