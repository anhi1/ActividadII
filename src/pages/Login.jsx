import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (!success) {
      setError("Correo o contraseña incorrectos");
    } else {
      setError("");
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src="/actividadII/jovenes.jpg"
            alt="Login visual"
            className="img-fluid"
            style={{ maxHeight: "100vh", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
            <div className="text-center mb-4">
              <img
                src="/actividadII/viajero.gif"
                alt="Animación viajero"
                style={{ height: "110px" }}
              />
            </div>

            <h2 className="mb-4 text-center">Iniciar Sesión</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="user1@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
