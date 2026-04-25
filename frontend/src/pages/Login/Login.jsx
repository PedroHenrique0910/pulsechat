// src/pages/Login.jsx
import "./Login.css";

export default function Login() {
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
            />
            </div>

            <div className="login-field">
            <label className="login-label">Senha</label>
            <input
                type="password"
                placeholder="••••••••"
                className="login-input"
            />
            </div>

            <button className="login-button">Acessar</button>
        </div>
    </div>
  );
}