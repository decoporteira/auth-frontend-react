import { useState } from "react";
import { login } from "../services/Api";
import Input from "./Inputs/Input";
import Button from "./Buttons/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login({ onLogin }) {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(inputType === "password" ? "text" : "password");
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
          <div className="relative">
            <Input
              type={inputType}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pr-10 p-2 border rounded"
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              text="Ver senha"
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <Button text="Login" />
        </form>
      </div>
    </>
  );
}
