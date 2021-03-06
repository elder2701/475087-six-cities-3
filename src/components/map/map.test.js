import React from "react";
import renderer from "react-test-renderer";
import createMapBlock from "./create-map-block.js";
import Map from "./map.jsx";

it(`<Map /> sould be render`, () => {
  createMapBlock();
  const tree = renderer
    .create(
        <Map
          cityLocation={{latitude: 51.38333, longitude: 5.4, zoom: 5}}
          offersCoords={[
            [1, 51.38333, 6.9],
            [2, 54.38333, 5.9]
          ]}
          name=""
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
