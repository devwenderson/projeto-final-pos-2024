import { useState, useEffect } from 'react'
import UserWrapper from './functions/userWrapper'
import './App.css'

const userApi = new UserWrapper('http://127.0.0.1:8000/api/users/');

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await userApi.getUsers();
        setUsers(users)
      } catch (error) {
        setError(error)
      }
    };

    fetchUsers()
  }, [])

  return (
    <>
      <h1>Início</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
