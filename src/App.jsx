// src/App.js
import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedPage from './pages/ProtectedPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'))

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Sair</button>
          <ProtectedPage />
        </>
      ) : (
        <>
          <Login onLogin={() => setIsAuthenticated(true)} />
          <Register />
        </>
      )}
    </div>
  )
}

export default App
