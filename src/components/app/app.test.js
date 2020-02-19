import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import createMapBlock from "../map/create-map-block.js";

const placesCount = 4;
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

it(`<App /> sould be render`, () => {
  createMapBlock();
  const tree = renderer
    .create(<App placesCount={placesCount} offers={offers}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
