import {reducer, ActionCreator, ActionType, AuthorizationStatus} from "./user.js";

it(`Reducer authorization`, () => {
  expect(
      reducer(
          {authorizationStatus: AuthorizationStatus.NO_AUTH},
          {type: ActionType.REQUIRED_AUTHORIZATION, payload: AuthorizationStatus.AUTH}
      )
  ).toEqual({authorizationStatus: AuthorizationStatus.AUTH});
});

it(`Reducer load user info`, () => {
  expect(
      reducer(
          {userInfo: {}},
          {type: ActionType.LOAD_USER_INFO, payload: {id: 1, email: `test`}}
      )
  ).toEqual({userInfo: {id: 1, email: `test`}});
});

it(`Action creator for authorization`, () => {
  const actCreatorResult = ActionCreator.requireAuthorization(AuthorizationStatus.AUTH);
  expect(actCreatorResult.type).toEqual(ActionType.REQUIRED_AUTHORIZATION);
  expect(actCreatorResult.payload).toBe(AuthorizationStatus.AUTH);
});

it(`Action creator for authorization`, () => {
  const actCreatorResult = ActionCreator.loadUserInfo({id: 1, email: ``});
  expect(actCreatorResult.type).toEqual(ActionType.LOAD_USER_INFO);
  expect(Object.keys(actCreatorResult.payload).length).toBe(2);
});


