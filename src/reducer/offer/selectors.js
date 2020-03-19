import NameSpace from "../name-space.js";

const getSelectedOffer = (state) => state[NameSpace.OFFER].offer;
const getNearOffers = (state) => state[NameSpace.OFFER].offerAround;
const getComments = (state)=> state[NameSpace.OFFER].comments;
const getIsSendComment = (state) => state[NameSpace.OFFER].isSendComment;

export {getSelectedOffer, getNearOffers, getComments, getIsSendComment};
