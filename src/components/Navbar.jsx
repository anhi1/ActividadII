import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="container">
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
           to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              src="logo.svg"
              className="bi"
              width="70"
              role="img"
              aria-label="Bootstrap"
            ></img>
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Inicio
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/reservations" className="nav-link px-2">
                Mis Reservas
              </Link>
            </li>
          )}
          <li>
            <Link to="/activities" className="nav-link px-2">
              Actividades
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2">
              Nosotros
            </Link>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          {!isAuthenticated ? (
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
          ) : (
            <>
              <button onClick={logout} className="btn btn-outline-danger me-2">
                Logout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
