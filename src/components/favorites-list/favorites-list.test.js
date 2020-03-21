import React from "react";
import renderer from "react-test-renderer";
import FavoritesList from "./favorites-list.jsx";

it(`<FavoritesList /> sould be render`, () => {
  const tree = renderer
    .create(<FavoritesList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
