// src/pages/ProtectedPage.js
import React, { useEffect, useState } from 'react'
import api from '../services/Api'


export default function ProtectedPage() {
  const [data, setData] = useState([])

  useEffect(() => {
   api.get('/users')
      .then(response => setData(response.data))
      .catch(() => alert('Acesso negado'))
  }, [])
  
  return (
    <div>
  <h2>Área Protegida</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Password Digest</th>
        <th>Criado em</th>
        <th>Atualizado em</th>
      </tr>
    </thead>
    <tbody>
      {data.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.email_address}</td>
          <td>{user.password_digest}</td>
          <td>{new Date(user.created_at).toLocaleString()}</td>
          <td>{new Date(user.updated_at).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
