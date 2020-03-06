import {extend} from "../utils.js";

const initialState = {
  city: ``,
  offers: []
};

const ActionType = {
  CHENGE_CITY: `CHENGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHENGE_CITY,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};

const getCities = (state) => Object.keys(state.offers).sort();
const getCityOffers = (state) => {
  return state.offers[state.city];
};

const OperationOffers = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const myOffers = response.data.reduce((result, offer) => {
        if (!result[offer.city.name]) {
          result[offer.city.name] = {
            city: offer.city,
            offers: []
          };
        }
        result[offer.city.name][`offers`].push(offer);

        return result;
      }, {});
      const cities = Object.keys(myOffers).sort();
      cities.map((city)=>{
        const renameKeysArrayOffers = Array.from(myOffers[city].offers, (offer)=> {
          const newObj = Object.assign({}, offer, {
            previewImage: offer.preview_image,
            isFavorite: offer.is_favorite,
            isPremium: offer.is_premium,
            maxAdults: offer.max_adults,
            hostId: offer.host.id,
            hostName: offer.host.name,
            hostIsPro: offer.host.is_pro,
            hostAvatarUrl: offer.host.avatar_url
          });
          delete newObj.city;
          delete newObj.preview_image;
          delete newObj.is_favorite;
          delete newObj.is_premium;
          delete newObj.max_adults;
          delete newObj.host;
          return newObj;
        });
        myOffers[city].offers = renameKeysArrayOffers;
      });
      dispatch(ActionCreator.loadOffers(myOffers));
      dispatch(ActionCreator.changeCity(cities[0]));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHENGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.GET_CITY_OFFERS:
      return extend(state, {
        cityOffers: state.offers.filter(
            (item) => item.city.name === action.payload
        )
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};

export {
  reducer,
  ActionType,
  OperationOffers,
  ActionCreator,
  getCities,
  getCityOffers
};
