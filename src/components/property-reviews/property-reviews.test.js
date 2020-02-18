import React from "react";
import renderer from "react-test-renderer";
import PropertyReviews from "./property-reviews.jsx";

it(`<Property /> sould be render`, () => {
  const tree = renderer.create(<PropertyReviews />).toJSON();
  expect(tree).toMatchSnapshot();
});
