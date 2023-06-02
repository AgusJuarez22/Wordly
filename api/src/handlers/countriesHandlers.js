const {
  getCountries,
  getCountryById,
  getCountriesByName,
  getLocation,
} = require("../controllers/countriesControllers");

const getCountryHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getCountriesByName(name);
      res.status(200).json(response);
    } else {
      const response = await getCountries();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCountryById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryLocation = async (req, res) => {
  const { country } = req.params
  try {
    const response = await getLocation(country);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryHandler,
  getCountryByIdHandler,
  getCountryLocation,
};
