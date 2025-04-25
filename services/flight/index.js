const express = require('express');
const app = express();
app.use(express.json());

app.get('/flights', (req, res) => {
  // Simulación de búsqueda de vuelos
  const { from, to, date } = req.query;
  res.json([
    { airline: 'AirEuropa', from, to, date, price: 120 },
    { airline: 'Iberia', from, to, date, price: 150 },
  ]);
});

app.listen(4002, () => {
  console.log('Flight service listening on port 4002');
});
