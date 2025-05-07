import { useState } from 'react';
import { login } from '../services/Api'

export default function Login({ onLogin }) {
  const [email_address, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email_address, password);
      localStorage.setItem('token', token);
      onLogin(token);
    } catch (err) {
      console.error('Erro no login:', err);
      alert('Credenciais inválidas');
    }
    
  };

  return (
    <>
    <div className='mb-10 mt-5'>
      <form onSubmit={submit} className='max-w-sm mx-auto' >
        <h2 className='text-4xl font-bold dark:text-white pb-2'>Login</h2>
        <div class="mb-5">
          <input
            type="email"
            placeholder="Email"
            value={email_address}
            onChange={e => setEmail(e.target.value)}
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          </div>
          <div class="mb-5">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Login</button>
      </form>
      </div>
    </>
  );
}
