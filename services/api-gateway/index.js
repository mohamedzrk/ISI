const express = require('express');
const axios = require('axios');
const app = express();

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://user:4001';

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
