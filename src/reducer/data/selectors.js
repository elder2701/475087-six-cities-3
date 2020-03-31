import NameSpace from "../name-space.js";
import {getCity} from "../city/selectors.js"
import {createSelector} from "reselect";

const getCities = (state) => Object.keys(state[NameSpace.DATA].offers).sort();
const getCityOffers = (state) => {
  return state[NameSpace.DATA].offers[state[NameSpace.CITY].city];
};

const getFirstCity = createSelector(getCities, (cities) => cities[0]);

const cityOffersSelector = (state) => state[NameSpace.DATA].offers;
const getOptionSelector = (state, props) => props.optionSorting;
const getFailStatus = (state) => state[NameSpace.DATA].failStatus;
const getSortedOffers = createSelector(
    [cityOffersSelector, getCity, getOptionSelector],
    (offers, city, option) => {
      switch (option) {
        case `Price: low to high`:
          return offers[city].offers.slice().sort((a, b) => a.price - b.price);
        case `Price: high to low`:
          return offers[city].offers.slice().sort((a, b) => -a.price + b.price);
        case `Top rated first`:
          return offers[city].offers.slice().sort((a, b) => -a.rating + b.rating);
      }
      return offers[city].offers;
    }
);

const getCityInfo = (state) => {
  const {city} = state[NameSpace.CITY];
  const {offers} = state[NameSpace.DATA];
  return offers[city].city;
};

export {
  getCities,
  getCityOffers,
  getSortedOffers,
  getCityInfo,
  getFirstCity,
  getFailStatus
};
