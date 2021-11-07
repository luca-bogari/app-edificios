const express = require("express");
const depenRouter = express.Router();
const { Edificios, Dependencias } = require("../models");

depenRouter.get("/:id", (req, res, next) => {
  Dependencias.findAll({ where: { EdificioId: req.params.id } })
    .then(dependencias => {
      res.status(200).json(dependencias);
    })
    .catch(next);
});

module.exports = depenRouter;
