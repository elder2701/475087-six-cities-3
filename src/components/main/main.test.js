import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import createMapBlock from "../map/create-map-block.js";

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];
const city = ``;
const mockStore = configureStore([]);

const offers = [
  {
    id: 2,
    figure: `img/room.jpg`,
    mark: ``,
    price: 8220,
    priceText: `night`,
    rating: 2,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  },
  {
    id: 10,
    figure: `img/room.jpg`,
    mark: ``,
    price: 101320,
    priceText: `night`,
    rating: 5,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  },
  {
    id: 3,
    figure: `img/room.jpg`,
    mark: `Premium`,
    price: 83210,
    priceText: `night`,
    rating: 1,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  },
  {
    id: 4,
    figure: ``,
    mark: ``,
    price: 8210,
    priceText: `night`,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  }
];

it(`<Main /> sould be render`, () => {
  const store = mockStore({});
  createMapBlock();
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main city={city} places={places} optionSorting="" cityOffers={offers} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
