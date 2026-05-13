import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/authService";

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        const response = await loginUser(email, senha)
        if (response.success) {
            localStorage.setItem("token", response.token) 
            navigate("/home") 
        }
    }

  return (
   <div className="login-wrapper">
        <div className="login-card">
            <h1 className="login-title">Entrar</h1>
            <p className="login-subtitle">Acesse sua conta</p>

            <div className="login-field">
            <label className="login-label">Email</label>
            <input
                type="email"
                placeholder="seu@email.com"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="login-field">
            <label className="login-label">Senha</label>
            <input
                type="password"
                placeholder="••••••••"
                className="login-input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            </div>

            <button className="login-button" onClick={handleLogin}>Acessar</button>
        </div>
    </div>
  );
}