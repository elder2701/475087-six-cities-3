import {extend} from "../../utils.js";

const initialState = {
  favorites: {},
  sending: true
};


const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  CHANGE_SEND_STATUS: `CHANGE_SEND_STATUS`
};

const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  }),
  changeStatus: (status)=> ({
    type: ActionType.CHANGE_SEND_STATUS,
    payload: status
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
