
import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import Home from './pages/Home'
import Register from './components/Register'
import ProtectedPage from './pages/ProtectedPage'



function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  const handleLogin = (token) => {
    setToken(token) 
  }

  const handleLogout = () => {

    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <div>

      {token ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          < ProtectedPage />

        </>
      ) : (
        <>
         <Home />
          <Login onLogin={handleLogin} />
          <Register />
        </>
      )}
    </div>
  )
}

export default App
