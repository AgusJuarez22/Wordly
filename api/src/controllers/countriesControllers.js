const { cleanArray } = require("../utils/utils");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const {API_KEY_GOOGLE} = process.env;

const getCountries = async () => {
  let cleanData = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return cleanData;
};

const getCountryById = async (id) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(id)) {
    throw Error("El id solo tiene que contener letras");
  }
  if (id.length !== 3) {
    throw Error("El id tiene que contener tres caracteres");
  }
  let newId = id.toUpperCase();
  const response = await Country.findByPk(newId, {
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });
  return response;
};

const getCountriesByName = async (name) => {
  const countries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  if (!countries.length) {
    throw Error("El pais ingresado es incorrecto o no existe");
  }
  return countries;
};

const getLocation = async (country) => {
  const apiRaw = (
    await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${country}&key=${API_KEY_GOOGLE}`
    )
  ).data;
  const apiLocation = apiRaw.results[0].geometry.location;
  return apiLocation;
};

module.exports = {
  getCountries,
  getCountryById,
  getCountriesByName,
  getLocation,
};
