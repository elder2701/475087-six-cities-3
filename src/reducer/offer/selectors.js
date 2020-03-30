import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

const getCommentsFromStore = (state) =>
  state[NameSpace.OFFER].comments.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

const getOffers = (state) => Object.values(state[NameSpace.DATA].offers);

const selectAllOffers = createSelector([getOffers], (offers) =>
  offers.reduce((prev, cur) => {
    prev.push(...cur.offers);
    return prev;
  }, [])
);

const getId = (state, props) => {
  return props.idOffer;
};

const getSelectedOffer = createSelector(
    [selectAllOffers, getId],
    (offers, idOffer) => {
      return offers.filter((item) => item.id === +idOffer)[0];
    }
);

const getNearOffers = (state) => state[NameSpace.OFFER].offerAround;
const getNearOffersId = createSelector([getNearOffers], (offers) =>
  offers.map((offer) => offer.id)
);
const getNearOffersInfo = createSelector(
    [selectAllOffers, getNearOffersId],
    (offers, nearOffersId) =>
      offers.filter((offer) => nearOffersId.indexOf(offer.id) !== -1)
);
const getComments = createSelector([getCommentsFromStore], (comments) =>
  comments.slice(0, 10)
);
const getIsSendComment = (state) => state[NameSpace.OFFER].isSendComment;

export {
  getSelectedOffer,
  getNearOffers,
  getComments,
  getIsSendComment,
  getNearOffersInfo
};
