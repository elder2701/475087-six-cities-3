import {ActionCreator as ActionLoadOffer} from "../data/data.js";
import {ActionCreator as ActionChangeCity} from "../city/city.js";
import {ActionCreator, AuthorizationStatus} from "../user/user.js";
import {ActionCreator as ActionLoadOfferInfo} from "../offer/offer.js";
import {ActionCreator as ActionLoadFavorites} from "../favorite/favorite.js";

const changeNameKeys = (offer) => {
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
};

const changeStructureLoadData = (data) =>
  data.reduce((result, offer) => {
    if (!result[offer.city.name]) {
      result[offer.city.name] = {
        city: offer.city,
        offers: []
      };
    }
    result[offer.city.name][`offers`].push(changeNameKeys(offer));
    return result;
  }, {});

const OperationOffers = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const myOffers = changeStructureLoadData(response.data);
      const cities = Object.keys(myOffers).sort();
      dispatch(ActionLoadOffer.loadOffers(myOffers));
      dispatch(ActionChangeCity.changeCity(cities[0]));
    });
  }
};

const OperationAuth = {
  checkAuth: () => (dispatch, getState, api) => {
    return api
      .get(`/login`)
      .then((res) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loadUserInfo(res.data));
      })
      .catch(() => {
        dispatch(
            ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
        );
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api
      .post(`/login`, {
        email: authData.login,
        password: authData.password
      })
      .then((res) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loadUserInfo(res.data));
      });
  }
};

const OperationOffer = {
  loadOfferComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`).then((res) => {
      dispatch(ActionLoadOfferInfo.loadOfferComments(res.data));
    });
  },
  loadOffersAround: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`).then((res) => {
      const data = res.data.map((item) => changeNameKeys(item));
      dispatch(ActionLoadOfferInfo.loadOffersAround(data));
    });
  }
};

const OperationComment = {
  sendComment: (id, commentData) => (dispatch, getState, api) => {
    return api
      .post(`/comments/${id}`, {
        comment: commentData.comment,
        rating: commentData.rating
      })
      .then((res) => {
        dispatch(ActionLoadOfferInfo.loadOfferComments(res.data));
        dispatch(ActionLoadOfferInfo.sendCommentOffer(true));
      })
      .catch(() => {
        dispatch(ActionLoadOfferInfo.sendCommentOffer(true));
      });
  }
};

const OperationFavorites = {
  loadFavorites: () => (dispatch, getState, api) => {
    return api
      .get(`/favorite`)
      .then((res) => {
        console.log(res.data)
        const myOffers = changeStructureLoadData(res.data);
        dispatch(ActionLoadFavorites.loadFavorites(myOffers));
      })
      .catch(() => {
        dispatch(ActionLoadFavorites.loadFavorites({}));
      });
  },

  changeStatusFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${+status}`).then(() => {
      return api.get(`/hotels`).then((response) => {
        const myOffers = changeStructureLoadData(response.data);
        dispatch(ActionLoadOffer.loadOffers(myOffers));
      });
    });
  },
  changeStatusAndUpdateFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${+status}`).then(() => {
      return api
        .get(`/hotels`)
        .then((response) => {
          const myOffers = changeStructureLoadData(response.data);
          dispatch(ActionLoadOffer.loadOffers(myOffers));
        })
        .then(() => {
          return api.get(`/favorite`).then((res) => {
            const myOffers = changeStructureLoadData(res.data);
            dispatch(ActionLoadFavorites.loadFavorites(myOffers));
          });
        });
    });
  }
};

export {
  OperationOffers,
  OperationAuth,
  OperationOffer,
  OperationComment,
  OperationFavorites,
  changeStructureLoadData
};
