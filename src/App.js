import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to client site{user.length}</h1>
    </div>
  );
}

export default App;
