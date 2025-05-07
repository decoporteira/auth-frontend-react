import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import Register from "./components/Register";
import ProtectedPage from "./pages/ProtectedPage";
import Button from "./components/Buttons/Button";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 ">
        <div className="w-full min-w-0 mx-auto px-4 pb-10">
          <nav className="p-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white hover:text-gray-400">
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/protected"
                  className="text-white hover:text-gray-400"
                >
                  Área Protegida
                </Link>
              </li>
              {token && (
                <li>
                  <Button onClick={handleLogout} text="Logout" />
                </li>
              )}
            </ul>
          </nav>
          <hr className="h-px mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                !token ? <Login onLogin={handleLogin} /> : <ProtectedPage />
              }
            />
            <Route
              path="/register"
              element={!token ? <Register /> : <ProtectedPage />}
            />
            <Route
              path="/protected"
              element={
                token ? <ProtectedPage /> : <Login onLogin={handleLogin} />
              }
            />
          </Routes>
        </div>{" "}
      </div>
    </Router>
  );
}

export default App;
