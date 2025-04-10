// src/components/Register.js
import React, { useState } from 'react'
import api from '../services/api'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/users',  { user: {
        email_address: email,
        password,
        password_confirmation: passwordConfirmation
      }})
      alert('Usuário criado com sucesso!')
    } catch (err) {
      alert('Erro ao criar usuário')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirmar senha" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
      <button type="submit">Cadastrar</button>
    </form>
  )
}
