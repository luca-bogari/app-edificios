const express = require("express");
const router = express.Router();
const edificiosRouter = require("./edificios");
const dependenciasRouter = require("./dependencias");

router.use("/edificios", edificiosRouter);
router.use("/dependencias", dependenciasRouter);

module.exports = router;
