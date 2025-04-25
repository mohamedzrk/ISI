# Check RabbitMQ dashboard at http://localhost:15672
# (login: guest / guest) to see the auth_events queue in action.

curl -X POST http://localhost:4000/login \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe"}'
