import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

function createNodeMock(element) {
  if (element.type === `section`) {
    return {};
  }
  return null;
}

it(`<Map /> sould be render`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <Map
          offersCoords={[
            [51.38333, 6.9],
            [54.38333, 5.9]
          ]}
        />, options
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
