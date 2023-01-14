import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...users, data];
        setUsers(newUser);
      })
      .catch((err) => console.log(err));

    event.target.reset();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="text" /> <br />
        <input type="email" name="email" id="" placeholder="email" /> <br />
        <input type="submit" value="Add User" />
      </form>

      <h1>Welcome to client site{users.length}</h1>
      {users.map((user) => (
        <p key={user.id}>
          userName:{user.name}
          userEmail: {user.email}
        </p>
      ))}
    </div>
  );
}

export default App;
