import { useState, useEffect } from 'react'
import ApiWrapper from './functions/apiWrapper.js'
import './App.css'

const apiWrapper = new ApiWrapper();

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const users = await apiWrapper.listAll(endpoint = '/users/');
        setUsers(users)
      } catch (error) {
        setError(error)
      }
    };

    setIsLoading(false)
    fetchUsers()
  }, [])

  return (
    <>
      <h1>Início</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
