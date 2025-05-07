// src/components/Register.js
import React, { useState } from "react";
import { register } from "../services/Api";
import validate from "../services/Validate";
import Input from "./Inputs/Input";
import Button from "./Buttons/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [inputTypePassword, setInputTypePassword] = useState("password");
  const [inputTypeConfPassword, setInputTypeConfPassword] =
    useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

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

  const togglePasswordVisibility = (name) => {
    if (name === "inputTypePassword") {
      setShowPassword(!showPassword);
      setInputTypePassword(
        inputTypePassword === "password" ? "text" : "password"
      );
    } else {
      setShowConfPassword(!showConfPassword),
        setInputTypeConfPassword(
          inputTypeConfPassword === "password" ? "text" : "password"
        );
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
        <div className="relative">
          <Input
            type={inputTypePassword}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("inputTypePassword")}
            text="Ver senha"
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <div className="relative">
          <Input
            type={inputTypeConfPassword}
            placeholder="Senha"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("inputTypeConfPassword")}
            text="Ver senha"
            className="absolute right-3 top-3 text-gray-500"
          >
            {showConfPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <Button text="Login" />
      </form>
    </div>
  );
}
