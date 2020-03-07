import {createSelector} from "reselect";
import NameSpace from "./name-space.js";

const citySelector = (state) => state[NameSpace.CITY].city;
const cityOffersSelector = (state) => state[NameSpace.DATA].offers;
const optionSelector = (state, props) => props.optionSorting;

const getSortedOffers = createSelector(
    [cityOffersSelector, citySelector, optionSelector],
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

const getCityInfo = (state)=> {
  const {city} = state[NameSpace.CITY];
  const {offers} = state[NameSpace.DATA];
  return offers[city].city;
};

export {getSortedOffers, getCityInfo};

