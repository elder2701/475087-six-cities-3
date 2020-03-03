import {extend} from "./utils.js";

const initialState = {
  city: `Paris`,
  cityOffers: [],
  offers: []
};

const ActionType = {
  CHENGE_CITY: `CHENGE_CITY`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (city)=>({
    type: ActionType.CHENGE_CITY,
    payload: city
  }),

  getCityOffers: (offers)=>({
    type: ActionType.GET_CITY_OFFERS,
    payload: offers
  }),

  loadOffers: (offers)=>({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};

const OperationOffers = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        const cityOffers = response.data.filter((item)=>item.city.name === getState().city);
        console.log(cityOffers);
        dispatch(ActionCreator.getCityOffers(cityOffers));
      });
  },
};

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case ActionType.CHENGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {cityOffers: state.offers.filter((item)=>item.city.name === action.payload)});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};

export {reducer, ActionType, OperationOffers, ActionCreator};
