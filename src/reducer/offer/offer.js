import {extend} from "../../utils.js";

const initialState = {
  offerAround: [],
  comments: [],
  isSendComment: true
};

const ActionType = {
  LOAD_OFFER_COMMENTS: `LOAD_OFFER_COMMENTS`,
  LOAD_OFFERS_AROUND: `LOAD_OFFERS_AROUND`,
  SEND_COMMENT_OFFER: `SEND_COMMENT_OFFER`,
};

const ActionCreator = {
  loadOfferComments: (comments) => ({
    type: ActionType.LOAD_OFFER_COMMENTS,
    payload: comments
  }),
  loadOffersAround: (offers) => ({
    type: ActionType.LOAD_OFFERS_AROUND,
    payload: offers
  }),
  sendCommentOffer: (isSend) => ({
    type: ActionType.SEND_COMMENT_OFFER,
    payload: isSend
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.LOAD_OFFERS_AROUND:
      return extend(state, {offerAround: action.payload});
    case ActionType.SEND_COMMENT_OFFER:
      return extend(state, {isSendComment: action.payload});
    case ActionType.LOAD_OFFERS_AROUND_FAIL:
      return extend(state, {failAroundStatus: action.payload});
    case ActionType.LOAD_OFFER_COMMENTS_FAIL:
      return extend(state, {failCommentsStatus: action.payload});
  }
  return state;
};

export {ActionCreator, ActionType, reducer};
