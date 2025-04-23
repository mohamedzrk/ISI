import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')  // hits API Gateway
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((u, i) => <li key={i}>{u.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
