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
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          value={email_address}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
