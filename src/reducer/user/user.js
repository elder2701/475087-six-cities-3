import {extend} from "../../utils.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.AUTH,
  userInfo: {}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_USER_INFO: `LOAD_USER_INFO`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  loadUserInfo: (userInfo) => {
    return {
      type: ActionType.LOAD_USER_INFO,
      payload: userInfo
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.LOAD_USER_INFO:
      return extend(state, {
        userInfo: action.payload
      });
  }
  return state;
};

export {ActionCreator, reducer, AuthorizationStatus};
