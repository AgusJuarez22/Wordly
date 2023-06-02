const { Router } = require("express");
const countriesRouter = Router();
const {
  getCountryHandler,
  getCountryByIdHandler,
  getCountryLocation,
} = require("../handlers/countriesHandlers");

countriesRouter.get("/", getCountryHandler);
countriesRouter.get("/:id", getCountryByIdHandler);
countriesRouter.get("/location/:country", getCountryLocation);

module.exports = countriesRouter;
