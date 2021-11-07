const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../db");

class Edificios extends Model {}

Edificios.init(
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
    modelName: "Edificios", //nombre del modelo
  }
);

module.exports = Edificios;
