import NameSpace from "../name-space.js";

const getCities = (state) => Object.keys(state[NameSpace.DATA].offers).sort();
const getCityOffers = (state) => {
  return state[NameSpace.DATA].offers[state[NameSpace.CITY].city];
};

export {getCities, getCityOffers};
