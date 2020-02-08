import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const placesCount = 4;

it(`<App /> sould be render`, () => {
  const tree = renderer
    .create(<App placesCount={placesCount}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
