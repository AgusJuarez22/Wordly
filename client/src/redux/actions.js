import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_REGION = "FILTER_BY_REGION";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_ALPHABETICAL = "ORDER_BY_ALPHABETICAL";
export const GET_COUNTRIES_BYNAME = "GET_COUNTRIES_BYNAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const GO_TO_PAGE = "GO_TO_PAGE";
export const GET_DETAIL = "GET_DETAIL";
export const NUM_TO_ONE = "NUM_TO_ONE";
export const UNMOUNT_COMPONENT = "UNMOUNT_COMPONENT";
export const GET_COUNTRY_COORDINATES = "GET_COUNTRY_COORDINATES";
export const CLEAR_LOCATION = "CLEAR_LOCATION";

export const getCountries = () => {
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3001/countries/");
    const countries = dbData.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountryCoordinates = (country) => {
  return async function (dispatch) {
    const dbData = await axios.get(
      `http://localhost:3001/countries/location/${country}`
    );
    const coordinates = dbData.data;
    dispatch({ type: GET_COUNTRY_COORDINATES, payload: coordinates });
  };
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    const dbData = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    const countries = dbData.data;
    dispatch({ type: GET_COUNTRIES_BYNAME, payload: countries });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`http://localhost:3001/activities`);
    const activities = dbData.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const dbData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = dbData.data;
    dispatch({ type: GET_DETAIL, payload: country });
  };
};

export const unmountComp = () => {
  return { type: UNMOUNT_COMPONENT };
};

export const filterByRegion = (region) => {
  return { type: FILTER_BY_REGION, payload: region };
};

export const filterByActivity = (activity) => {
  return { type: FILTER_BY_ACTIVITY, payload: activity };
};

export const orderByPopulation = (order) => {
  return { type: ORDER_BY_POPULATION, payload: order };
};

export const orderByAlphabetical = (order) => {
  return { type: ORDER_BY_ALPHABETICAL, payload: order };
};

export const nextPage = () => {
  return { type: NEXT_PAGE };
};

export const prevPage = () => {
  return { type: PREV_PAGE };
};

export const goToPage = (page) => {
  return { type: GO_TO_PAGE, payload: page };
};

export const numToOne = () => {
  return { type: NUM_TO_ONE };
};

export const clearLocation = () => {
  return { type: CLEAR_LOCATION };
};
