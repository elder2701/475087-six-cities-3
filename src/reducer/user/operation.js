import {ActionCreator, AuthorizationStatus} from "./user.js";

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
        .then(() => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        })
        .catch((err) => {
          throw err;
        });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
        .then(() => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        });
  },
};

export {Operation};
