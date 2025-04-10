import { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
  const [email_address, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/sessions', {
        email_address,
        password
      });
      const token = res.data?.data?.token;
      localStorage.setItem('token', token);
      onLogin(token);
    } catch (err) {
      alert('Credenciais inválidas');
    }
  };

  return (
    <>
    <h2>Login</h2>
     <form onSubmit={submit}>
      <input placeholder="Email" value={email_address} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </>
   
  );
}
