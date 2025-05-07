// src/components/Register.js
import React, { useState } from "react";
import { register } from "../services/Api";
import validate from "../services/Validate";
import Input from "./Inputs/Input";
import Button from "./Buttons/Button";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const errorMsg = validate({
      email,
      password,
      confirmPassword: passwordConfirmation,
    });
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    try {
      const response = await register(email, password, passwordConfirmation);
      setSuccess("Usuário criado com sucesso");
      setError("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
    } catch (err) {
      alert("Erro ao criar usuário");
    }
  };

  return (
    <div className="mb-5 mt-5">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold dark:text-white pb-2">Cadastro</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
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
        <Input
          type="password"
          placeholder="Senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <Button text="Login" />
      </form>
    </div>
  );
}
