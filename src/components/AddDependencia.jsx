import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const AddDependencia = () => {
  const history = useHistory();
  // ESTADOS
  const [edificios, setEdificios] = useState([]);
  const [values, setValues] = useState({
    nombre: "",
    domicilio: "",
    EdificioId: null,
  });

  useEffect(() => {
    // traigo todos los edificios
    axios.get("/api/edificios").then(response => {
      setEdificios(response.data);
      // guardo el primer edificio como seleccionado por default
      setValues({
        ...values,
        EdificioId: response.data[0].id,
        domicilio: response.data[0].domicilio,
      });
    });
  }, []);

  // seteo el valor de los inputs en el estado
  const handleInputChange = e => {
    setValues({
      ...values,
      nombre: e.target.value,
    });
  };

  const handleSelect = async e => {
    try {
      // obtengo la data del edificio seleccionado
      const { data } = await axios.get(`/api/edificios/${e.target.value}`);
      //  seteo el Id y la dirección del edifico en la nueva dependenci
      setValues({ ...values, EdificioId: data.id, domicilio: data.domicilio });
    } catch (err) {
      alert("Ocurrió un error al seleccionar este edificio");
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Envio data al backend
      await axios.put(`/api/dependencias/${values.EdificioId}`, values);
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
            Nombre de la dependencia
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
          <label htmlFor="selectInput" className="form-label">
            Edificio
          </label>
          <select
            id="selectInput"
            className="form-select"
            onChange={handleSelect}
          >
            {edificios?.map(edificio => (
              <option key={edificio.id} value={edificio.id}>
                {edificio.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default AddDependencia;
