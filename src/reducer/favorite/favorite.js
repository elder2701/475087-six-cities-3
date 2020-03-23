import {extend} from "../../utils.js";

const initialState = {
  favorites: {},
};


const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

const ActionCreator = {
  loadFavorites: (offers) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offers
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return extend(state, {favorites: action.payload});
  }
  return state;
};

export {
  reducer,
  ActionType,
  ActionCreator,
};
