import {extend} from "../../utils.js";

const initialState = {
  offers: [],
  failStatus: false
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_FAIL: `LOAD_OFFERS_FAIL`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  setFailStatus: (fail)=>({
    type: ActionType.LOAD_OFFERS_FAIL,
    payload: fail
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.LOAD_OFFERS_FAIL:
      return extend(state, {failStatus: action.payload});
  }
  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
};
