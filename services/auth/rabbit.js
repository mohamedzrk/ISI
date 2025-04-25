const amqplib = require('amqplib');

async function connectRabbitMQ() {
  const connection = await amqplib.connect('amqp://rabbitmq:5672');
  const channel = await connection.createChannel();
  await channel.assertQueue('auth_events', { durable: true });
  return channel;
}

async function publishEvent(channel, queue, message) {
  const buffer = Buffer.from(JSON.stringify(message));
  channel.sendToQueue(queue, buffer);
  console.log('Published event:', message);
}

module.exports = { connectRabbitMQ, publishEvent };
