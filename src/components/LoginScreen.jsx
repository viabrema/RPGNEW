// components/LoginScreen.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-red-600">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-700 p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-red-600 p-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
