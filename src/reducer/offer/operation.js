import {ActionCreator} from "./offer.js";
import NameSpace from "../name-space.js";

const Operation = {
  loadOfferComments: (dispatch, getState, api)=>{
    const state = getState();
    const {offer} = state[NameSpace.OFFER];
    return api.get(`/comments/${offer}`).then((res)=>{
      dispatch(ActionCreator.loadOfferComments(res.data));
    });
  },
  loadOffersAround: (dispatch, getState, api)=>{
    const state = getState();
    const {offer} = state[NameSpace.OFFER];
    return api.get(`/hotels/${offer}/nearby`).then((res)=>{
      dispatch(ActionCreator.loadOffersAround(res.data));
    });
  }
};

export {Operation};
