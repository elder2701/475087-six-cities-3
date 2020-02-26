import {extend} from "./utils.js";
import offers from "./mock/offers.js";

const firstCity = Object.keys(offers)[0];
const firstCityOffers = offers[firstCity];

const initialState = {
  city: firstCity,
  cityOffers: firstCityOffers
};

const ActionType = {
  CHENGE_CITY: `CHENGE_CITY`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
};

const ActionCreator = {
  changeCity: (city)=>({
    type: ActionType.CHENGE_CITY,
    payload: city
  }),

  getCityOffers: (city)=>({
    type: ActionType.GET_CITY_OFFERS,
    payload: offers[city]
  })
};

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case ActionType.CHENGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {cityOffers: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
