import React from "react";
import renderer from "react-test-renderer";
import SortingOptions from "./sorting-options.jsx";

it(`<SortingOptions /> sould be render`, () => {
  const tree = renderer
    .create(
        <SortingOptions
          selectOption={() => {}}
          optionSorting={`Popular`}
          open={false}
          handleClose={() => {}}
          handleCloseOrOpen={() => {}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
