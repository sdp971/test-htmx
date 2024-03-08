const express = require('express');

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'Harvey Specter',
    },
    {
      id: 2,
      name: 'Louis Lit',
    },
    {
      id: 3,
      name: 'Donna Paulsen',
    },
  ];
  res.send(`
<h1>Users</h1>
<ul>${users.map((user) => `<li>${user.name}</li>`).join('')}</ul>`);
});



app.listen(3000, () => {
  console.log('listening on port 3000');
});
