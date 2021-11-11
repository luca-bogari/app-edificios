import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dependencias = ({ id }) => {
  // ESTADOS
  const [edificio, setEdificio] = useState({});
  const [dependencias, setDependencias] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/edificios/${id}`)
      .then(res => setEdificio(res.data)) //traigo la informacion del edificio seleccionado y lo guardo en un estado
      .catch(err => {
        console.log(err);
      });
    // traigo todas las dependencias del edificio seleccionado a través del id pasado por props
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
      {dependencias[0] ? (
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
      ) : (
        <div className="container sinDatos">
          <span>Sin datos para mostrar</span>
        </div>
      )}
    </div>
  );
};

export default Dependencias;
