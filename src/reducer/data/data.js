import {extend} from "../../utils.js";

const initialState = {
  offers: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHENGE_CITY,
    payload: city
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }
  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
};
