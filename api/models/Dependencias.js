const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

class Dependencias extends Model {}

Dependencias.init(
  {
    // Model attributes
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    domicilio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db, //conexión
    modelName: "Dependencias", //nombre del modelo
  }
);

module.exports = Dependencias;
