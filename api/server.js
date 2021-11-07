const express = require("express");
const volleyball = require("volleyball");
const db = require("./db");
const app = express();
const routes = require("./routes");
const models = require("./models/index");

// Middlewares
app.use(volleyball);
app.use(express.json());

//  Ruteo
app.use("/api", routes);

// Sincornizacion con la database
db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});
