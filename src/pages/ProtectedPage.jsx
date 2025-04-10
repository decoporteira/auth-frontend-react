// src/pages/ProtectedPage.js
import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function ProtectedPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('/users') // exemplo de rota protegida
      .then(response => setData(response.data))
      .catch(() => alert('Acesso negado'))
  }, [])

  return (
    <div>
        
      <h2>Área Protegida</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
