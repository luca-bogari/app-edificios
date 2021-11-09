import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Edificios = () => {
  const [edificios, setEdificios] = useState([]);

  useEffect(() => {
    axios.get("/api/edificios").then(response => setEdificios(response.data));
  }, []);

  return (
    <div className="container tabla">
      <h4>Edificios del poder judicial</h4>
      <span>
        Ciudad: <b>NEUQUEN</b>
      </span>
      <table className="table table-bordered">
        <thead className="table tablahead">
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {edificios?.map(edificio => (
            <tr key={edificio.id}>
              <th>
                <Link to={`/dependencias/${edificio.id}`} className="nombre">
                  {edificio.nombre}
                </Link>
              </th>
              <th className="domicilio">{edificio.domicilio}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edificios;
