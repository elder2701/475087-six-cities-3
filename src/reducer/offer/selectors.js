import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

const getCommentsFromState = (state) =>
  state[NameSpace.OFFER].comments.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

const getSelectedOffer = (state) => state[NameSpace.OFFER].offer;
const getNearOffers = (state) => state[NameSpace.OFFER].offerAround;
const getComments = createSelector([getCommentsFromState], (comments) =>
  comments.slice(0, 10)
);
const getIsSendComment = (state) => state[NameSpace.OFFER].isSendComment;

export {getSelectedOffer, getNearOffers, getComments, getIsSendComment};
