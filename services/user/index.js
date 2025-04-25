const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([
    { name: 'Alice' },
    { name: 'Bob' }
  ]);
});

app.listen(4001, () => {
  console.log('User service running on port 4001');
});
