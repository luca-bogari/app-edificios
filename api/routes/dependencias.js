const express = require("express");
const depenRouter = express.Router();
const { Edificios, Dependencias } = require("../models");

// traer todas las dependencias de un edificio por el id
depenRouter.get("/:id", (req, res, next) => {
  Dependencias.findAll({ where: { EdificioId: req.params.id } })
    .then(dependencias => {
      res.status(200).json(dependencias);
    })
    .catch(err => {
      next(err);
    });
});

// agregar una nueva dependencia
depenRouter.put("/:id", (req, res, next) => {
  const data = { ...req.body, EdificioId: Number(req.params.id) };
  Dependencias.create(data)
    .then(dependencia => {
      res.status(201).json(dependencia);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = depenRouter;
