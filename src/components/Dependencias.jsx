import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dependencias = ({ id }) => {
  const [edificio, setEdificio] = React.useState({});
  const [dependencias, setDependencias] = React.useState([]);

  useEffect(() => {
    axios
      .get(`/api/edificios/${id}`)
      .then(res => setEdificio(res.data))
      .catch(err => {
        console.log(err);
      });
    axios.get(`/api/dependencias/${id}`).then(res => setDependencias(res.data));
  }, []);

  return (
    <div className="container tabla">
      <h4>
        {edificio.nombre} - Dirección: {edificio.domicilio}
      </h4>
      <span>
        <b>Organismos en el edificio</b>
      </span>
      <table className="table table-bordered">
        <thead className="table tablahead">
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {dependencias?.map(dependencia => (
            <tr key={dependencia.id}>
              <th>
                <span className="depenName">{dependencia.nombre}</span>
              </th>
              <th className="domicilio">{dependencia.domicilio}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dependencias;
