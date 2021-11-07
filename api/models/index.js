const Edificios = require("./Edificios");
const Dependencias = require("./Dependencias");

// ASOCIACIONES
Edificios.hasMany(Dependencias);
Dependencias.belongsTo(Edificios);

module.exports = { Edificios, Dependencias };
