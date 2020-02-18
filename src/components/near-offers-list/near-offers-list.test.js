import React from "react";
import renderer from "react-test-renderer";
import NearOffersList from "./near-offers-list.jsx";

it(`<NearOffersList /> sould be render`, () => {
  const tree = renderer
    .create(<NearOffersList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
