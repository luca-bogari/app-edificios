//Conexión a la base de datos
const { Sequelize } = require("sequelize");

const db = new Sequelize("edificios_nqn", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
