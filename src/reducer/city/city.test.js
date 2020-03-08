import {reducer, ActionCreator, ActionType} from "./city.js";

it(`Reducer should change city`, () => {
  expect(
      reducer(
          {city: `Moscow`, cityOffers: []},
          {type: ActionType.CHENGE_CITY, payload: `Oslo`}
      )
  ).toEqual({city: `Oslo`, cityOffers: []});
});

it(`Action creator for changing city`, () => {
  expect(ActionCreator.changeCity(`Oslo`)).toEqual({
    type: ActionType.CHENGE_CITY,
    payload: `Oslo`
  });
});
