import React from "react";
import renderer from "react-test-renderer";
import PlaceReviews from "./place-reviews.jsx";

it(`<PlaceReviews /> sould be render`, () => {
  const tree = renderer.create(<PlaceReviews />).toJSON();
  expect(tree).toMatchSnapshot();
});
