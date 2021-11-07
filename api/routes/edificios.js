const express = require("express");
const edificiosRouter = express.Router();
const { Edificios } = require("../models");

edificiosRouter.get("/", (req, res, next) => {
  Edificios.findAll()
    .then(edificios => {
      res.status(200).json(edificios);
    })
    .catch(next);
});

module.exports = edificiosRouter;
