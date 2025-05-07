// src/components/Register.js
import React, { useState } from 'react'

import { register } from '../services/Api'
import validate from '../services/Validate'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const errorMsg = validate({ email, password,  confirmPassword: passwordConfirmation })
    if (errorMsg) {
      setError(errorMsg)
      return
    }
    
    try {
     const response = await register(email, password, passwordConfirmation);
      setSuccess('Usuário criado com sucesso')
      setError('')
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
    } catch (err) {
      alert('Erro ao criar usuário')
     
    }
  
  }

  return (
    <div className='mb-5 mt-5'>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <h2 className='text-4xl font-bold dark:text-white pb-2'>Cadastro</h2>
        { error && <p style={{ color: 'red' }}>{error}</p> }
        { success && <p style={{ color: 'green' }}>{success}</p> }
        <div class="mb-5">
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} 
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div class="mb-5">
              <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <div class="mb-5">
        <input type="password" placeholder="Confirmar senha" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
      </form>
    </div>

  )
}
