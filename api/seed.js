const Edificios = require("./models/Edificios");
const Dependencias = require("./models/Dependencias");
const edifData = require("./utils/edificios");
const depenData = require("./utils/dependencias");
const db = require("./db");
require("./models/index");

db.sync({ force: false })
  .then(() => {
    console.log("Conexion establecida...");
  })
  .then(() => {
    Edificios.bulkCreate(edifData)
      .then(() => console.log("Edificios cargados correctamente"))
      .catch(err => console.log("Error al cargar edificios", err));
  })
  .then(() => {
    Dependencias.bulkCreate(depenData)
      .then(() => console.log("Dependencias cargadas correctamente"))
      .catch(err => console.log("Error al cargar dependencias", err));
  });
