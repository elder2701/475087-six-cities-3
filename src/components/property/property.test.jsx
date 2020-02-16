import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

it(`<Property /> sould be render`, () => {
  const tree = renderer
    .create(<Property />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
