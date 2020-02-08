import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];

const placesCount = 4;

it(`<Main /> sould be render`, () => {
  const tree = renderer
    .create(<Main placesCount={placesCount} places={places} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
