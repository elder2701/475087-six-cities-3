import {ActionCreator, AuthorizationStatus} from "./user.js";

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
        .then((res) => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.loadUserInfo(res.data));
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
    .then((res) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loadUserInfo(res.data));
    });
  },
};

export {Operation};
