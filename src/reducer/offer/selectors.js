import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

const getCommentsFromStore = (state) =>
  state[NameSpace.OFFER].comments.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

const getOffers = (state) =>
  state[NameSpace.DATA].offers[state[NameSpace.CITY].city].offers;

const getId = (state, props) =>{
  console.log(state);
  console.log(props); 
  return props.match.params.id;}

const getSelectedOffer = createSelector(
    [getOffers, getId],
    (offers, id) => offers.filter((item) => item.id === id)[0]
);

const getNearOffers = (state) => state[NameSpace.OFFER].offerAround;
const getComments = createSelector([getCommentsFromStore], (comments) =>
  comments.slice(0, 10)
);
const getIsSendComment = (state) => state[NameSpace.OFFER].isSendComment;

export {getSelectedOffer, getNearOffers, getComments, getIsSendComment};
