const getCities = (state) => Object.keys(state.offers).sort();
const getCityOffers = (state) => {
  return state.offers[state.city];
};

export {getCities, getCityOffers};
