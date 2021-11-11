import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const AddEdificio = () => {
  // ESTADOS
  const history = useHistory();
  const [values, setValues] = useState({
    nombre: "",
    domicilio: "",
  });

  // setea en el estado el valor de los inputs
  const handleInputChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Envio data al backend
      await axios.put("/api/edificios", values);
      // Redirecciono a la pantalla root
      history.push("/");
    } catch (err) {
      alert("Ocurrió un error intentelo de nuevo");
    }
  };

  return (
    <div className="container formulario">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputNombre" className="form-label">
            Nombre del edificio
          </label>
          <input
            type="text"
            id="inputNombre"
            name="nombre"
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDomicilio" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            name="domicilio"
            className="form-control"
            id="inputDomicilio"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default AddEdificio;
