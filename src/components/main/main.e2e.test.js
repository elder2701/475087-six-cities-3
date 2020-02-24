import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import createMapBlock from "../map/create-map-block.js";

Enzyme.configure({
  adapter: new Adapter()
});

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];

const city = ``;

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

const mockStore = configureStore([]);

it(`Sould welcome button be pressed`, () => {
  const store = mockStore({});
  createMapBlock();
  const onCityHeaderClick = jest.fn();

  const main = mount(
      <Provider store={store}>
        <Main
          city={city}
          onCityHeaderClick={onCityHeaderClick}
          places={places}
          cityOffers={offers}
        />
      </Provider>
  );
  let headerButton = main.find(`a.locations__item-link`);
  for (let i = 0; i < headerButton.length; i++) {
    headerButton.at(i).simulate(`click`);
  }

  expect(onCityHeaderClick.mock.calls.length).toBe(headerButton.length);
});
