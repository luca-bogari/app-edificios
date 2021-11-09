const express = require("express");
const edificiosRouter = express.Router();
const { Edificios } = require("../models");

// traer todos los edificios
edificiosRouter.get("/", (req, res, next) => {
  Edificios.findAll()
    .then(edificios => {
      res.status(200).json(edificios);
    })
    .catch(err => {
      next(err);
    });
});

// busca un edificio por el ID
edificiosRouter.get("/:id", (req, res, next) => {
  Edificios.findOne({ where: { id: req.params.id } })
    .then(edificio => {
      res.status(200).json(edificio);
    })
    .catch(err => {
      next(err);
    });
});

// crear un nuevo edificio
edificiosRouter.put("/", (req, res, next) => {
  Edificios.create(req.body)
    .then(edificio => {
      res.status(201).json(edificio);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = edificiosRouter;
