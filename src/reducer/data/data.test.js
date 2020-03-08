import {reducer, ActionCreator, ActionType} from "./data.js";

const cities = {
  Paris: [],
  Amsterdam: [
    {
      id: 1,
      figurePreview: `img/room.jpg`,
      mark: `Premium`,
      price: 822,
      rating: 4,
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`
    },
    {
      id: 2,
      figurePreview: `img/room.jpg`,
      mark: ``,
      price: 20,
      priceText: `night`,
      rating: 5,
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`
    }
  ]
};

it(`Reducer should get city offers`, () => {
  const state = reducer(
      {city: ``, cityOffers: []},
      {type: ActionType.LOAD_OFFERS, payload: cities[`Amsterdam`]}
  );
  expect(state.offers.length).toBe(2);
});

it(`Action creator for changing city`, () => {
  const actCreatorResult = ActionCreator.loadOffers(cities);
  expect(actCreatorResult.type).toEqual(ActionType.LOAD_OFFERS);
  expect(Object.keys(actCreatorResult.payload).length).toBe(2);
});
