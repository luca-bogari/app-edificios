import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" to="/">
            <img
              src="http://www.jusneuquen.gov.ar/guiajudicial/src/imagenes/escudo.01de8dca1a25818a2e9c0d4897f27557.jpg"
              alt="logo"
              width="40"
            />
          </Link>
          <span className="title">PODER JUDICIAL DE NEUQUEN</span>
        </div>
      </nav>
      <nav className="navbar nav">
        <div className="container-fluid justify-content-center py-1">
          <Link to="/" className="navLink mx-2 p-2">
            Edificios
          </Link>
          <Link to="/addEdificio" className="navLink mx-2 p-2">
            Agregar edificio
          </Link>
          <Link to="/addDependencia" className="navLink mx-2 p-2">
            Nueva dependencia
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
