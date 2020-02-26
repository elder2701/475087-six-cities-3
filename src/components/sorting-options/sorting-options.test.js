import React from "react";
import renderer from "react-test-renderer";
import SortingOptions from "./sorting-options.jsx";

it(`<Main /> sould be render`, () => {
  const tree = renderer.create(<SortingOptions />).toJSON();
  expect(tree).toMatchSnapshot();
});
