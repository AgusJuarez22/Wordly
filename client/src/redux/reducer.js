import {
  GET_COUNTRIES,
  FILTER_BY_REGION,
  ORDER_BY_POPULATION,
  ORDER_BY_ALPHABETICAL,
  GET_COUNTRIES_BYNAME,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITY,
  NEXT_PAGE,
  PREV_PAGE,
  GET_DETAIL,
  NUM_TO_ONE,
  UNMOUNT_COMPONENT,
  GET_COUNTRY_COORDINATES,
  CLEAR_LOCATION,
  GO_TO_PAGE,
} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  allCountries: [],
  detail: {},
  numPage: 1,
  location: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    }
    case GET_COUNTRY_COORDINATES: {
      return {
        ...state,
        location: action.payload,
      };
    }
    case FILTER_BY_REGION: {
      const countriesByRegion = state.allCountries.filter(
        (elem) => elem.region === action.payload
      );
      return { ...state, countries: countriesByRegion };
    }
    case FILTER_BY_ACTIVITY: {
      const countriesByActivity = state.allCountries.filter((country) =>
        country.activities.some((activity) => activity.name === action.payload)
      );
      return { ...state, countries: countriesByActivity };
    }
    case ORDER_BY_POPULATION: {
      return {
        ...state,
        countries:
          action.payload === "Ascendente"
            ? state.countries.sort((a, b) => a.population - b.population)
            : state.countries.sort((a, b) => b.population - a.population),
      };
    }
    case ORDER_BY_ALPHABETICAL: {
      return {
        ...state,
        countries:
          action.payload === "Ascendente"
            ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
            : state.countries.sort((a, b) => b.name.localeCompare(a.name)),
      };
    }
    case GET_COUNTRIES_BYNAME: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        activities: action.payload,
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case UNMOUNT_COMPONENT: {
      return {
        ...state,
        detail: {},
      };
    }
    case NEXT_PAGE: {
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    }
    case PREV_PAGE: {
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    }
    case NUM_TO_ONE: {
      return {
        ...state,
        numPage: 1,
      };
    }
    case GO_TO_PAGE:{
      return{
        ...state,
        numPage: action.payload
      }
    }
    case CLEAR_LOCATION:{
      return{
        ...state,
        location: {}
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
