import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const offer = {
  id: 4,
  figurePreview: ``,
  mark: ``,
  price: 8210,
  rating: 4,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`
};

it(`<Offer /> sould be render`, () => {
  const tree = renderer
    .create(<Offer offer={offer} onHoverActiveCard={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});