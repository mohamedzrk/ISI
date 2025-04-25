import React, { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);

  const searchFlights = async () => {
    const res = await fetch('http://localhost:3000/flights?from=MAD&to=CDG&date=2025-05-10');
    const data = await res.json();
    setResults(data);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Comparador de Vuelos</h1>
      <button onClick={searchFlights}>Buscar vuelos MAD → CDG</button>
      <ul>
        {results.map((flight, i) => (
          <li key={i}>
            {flight.airline}: {flight.from} → {flight.to} - {flight.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
