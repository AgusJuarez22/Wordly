const { Country, Activity } = require("../db");
const axios = require("axios");

const cleanArray = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.cca3,
      name: elem.name.common,
      flag: elem.flags[1],
      continent: elem.region,
      capital: elem.capital,
      subregion: elem.subregion,
      area: elem.area,
      population: elem.population,
    };
  });

const inyectDbWithApi = async () => {
  const apiHasBeenInyected = await Country.findAll();
  if (apiHasBeenInyected.length === 0) {
    const apiRaw = (await axios.get("https://restcountries.com/v3/all")).data;
    const cleanData = cleanArray(apiRaw);
    cleanData.forEach((elem) => {
      Country.create({
        id: elem.id,
        name: elem.name,
        flag: elem.flag,
        region: elem.continent,
        capital: elem.capital,
        subregion: elem.subregion,
        area: elem.area,
        population: elem.population,
      });
    });
  }
};

module.exports = {
  cleanArray,
  inyectDbWithApi,
};
