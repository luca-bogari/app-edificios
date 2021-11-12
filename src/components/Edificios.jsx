import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Edificios = () => {
  // ESTADOS
  const [edificios, setEdificios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [edificiosFiltrados, setEdificiosFiltrados] = useState([]);

  useEffect(() => {
    // traigo todos los edificios de la base de datos
    axios.get("/api/edificios").then(response => {
      setEdificios(response.data);
      setEdificiosFiltrados(response.data);
    });
  }, []);

  useEffect(() => {
    // filtra los todos los edificios por el nombre
    let search = edificios.filter(item => {
      if (item.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
        return item;
      }
    });
    // setea los edificios filtrados
    setEdificiosFiltrados(search);
  }, [busqueda]);

  // setea en el estado el valor del input para filtrar
  const handleBusqueda = async e => {
    await setBusqueda(e.target.value);
  };

  return (
    <div className="container tabla">
      <div className="row header">
        <div className="col-sm">
          <h4>Edificios del poder judicial</h4>
          <span>
            Ciudad: <b>NEUQUEN</b>
          </span>
        </div>
        <div className="col-sm buscador">
          <label htmlFor="search" className="form-label">
            Filtro por Edificio
          </label>
          <input
            className="form-control me-2"
            type="search"
            id="search"
            placeholder="Nombre del edificio"
            onChange={handleBusqueda}
          />
        </div>
      </div>
      <table className="table table-bordered">
        <thead className="table tablahead">
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {edificiosFiltrados?.map(edificio => (
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
      {edificiosFiltrados[0] ? (
        <></>
      ) : (
        <div className="container sinDatos">
          <span>Sin datos para mostrar</span>
        </div>
      )}
    </div>
  );
};

export default Edificios;
