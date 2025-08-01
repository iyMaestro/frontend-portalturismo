import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-portalturismo-omjp.onrender.com/api/auth/login", {
        email,
        password: senha // ou apenas `password` se for esse o nome da variável
      });
      const userData = response.data;
      localStorage.setItem("User", JSON.stringify(userData));
      alert("Usuário logado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert("Erro ao logar: email ou senha incorretos.");
      } else {
        alert("Erro ao conectar ao servidor.");
      }
    }
  };
 
  return (
    <>
      <div className="bg-orange-100 p-9 sm:p-6 md:p-5 shadow-2xl w-full max-w-md sm:max-w-lg border-black border-2">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              placeholder="Digite seu email"/>
          </div>
          <div>
            <label htmlFor="senha" className="block mb-1 font-medium">Senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-b-lg hover:bg-amber-300 transition pt-3"
          >
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem conta?
          <a href="/register" className="text-orange-700 hover:underline ml-1">
            Cadastre-se
          </a>
        </p>
      </div>
    </>
  )
}
 
export default LoginForm;
 