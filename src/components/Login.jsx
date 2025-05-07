import { useState } from "react";
import { login } from "../services/Api";
import Input from "./Inputs/Input";
import Button from "./Buttons/Button";

export default function Login({ onLogin }) {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email_address, password);
      localStorage.setItem("token", token);
      onLogin(token);
    } catch (err) {
      console.error("Erro no login:", err);
      alert("Credenciais inválidas");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submit} className="max-w-sm mx-auto">
          <h2 className="text-4xl font-bold dark:text-white pb-2">Login</h2>
          <Input
            type="email"
            placeholder="Email"
            value={email_address}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button text="Login" />
        </form>
      </div>
    </>
  );
}
