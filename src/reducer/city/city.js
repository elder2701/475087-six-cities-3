import {extend} from "../utils.js";

const initialState = {
  city: ``
};

const ActionType = {
  CHENGE_CITY: `CHENGE_CITY`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHENGE_CITY,
    payload: city
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHENGE_CITY:
      return extend(state, {city: action.payload});
  }
  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
};


