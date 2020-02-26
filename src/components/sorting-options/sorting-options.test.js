import React from "react";
import renderer from "react-test-renderer";
import SortingOptions from "./sorting-options.jsx";

it(`<SortingOptions /> sould be render`, () => {
  const tree = renderer
    .create(
        <SortingOptions onSelectOption={() => {}} optionSorting={`Popular`} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
