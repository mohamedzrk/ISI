const express = require('express');
const bodyParser = require('body-parser');
const { connectRabbitMQ, publishEvent } = require('./rabbit');

const app = express();
app.use(bodyParser.json());

let channel;

// Simulated user login route
app.post('/login', async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username required' });
  }

  // Simulate login logic (no DB here for simplicity)
  console.log(`User ${username} logged in`);

  // Publish login event
  const event = {
    type: 'user.login',
    payload: { username, timestamp: new Date().toISOString() }
  };

  try {
    await publishEvent(channel, 'auth_events', event);
    res.json({ message: 'Login successful', event });
  } catch (err) {
    res.status(500).json({ error: 'Event publish failed' });
  }
});

app.listen(4000, async () => {
  console.log('Auth service listening on port 4000');
  channel = await connectRabbitMQ();
});
