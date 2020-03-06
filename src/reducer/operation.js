import {ActionCreator as ActionLoadOffer} from "./data/data.js";
import {ActionCreator as ActionChangeCity} from "./city/city.js";

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
      dispatch(ActionLoadOffer.loadOffers(myOffers));
      dispatch(ActionChangeCity.changeCity(cities[0]));
    });
  }
};

export {OperationOffers};
