import React from "react";
import renderer from "react-test-renderer";
import Favorite from "./favorite.jsx";

it(`<FavoritesList /> sould be render`, () => {
  const tree = renderer
    .create(<Favorite />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
