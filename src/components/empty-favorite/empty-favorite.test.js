import React from "react";
import renderer from "react-test-renderer";
import EmptyFavorite from "./empty-favorite.jsx";

it(`<EmptyFavorite /> sould be render`, () => {
  const tree = renderer.create(<EmptyFavorite />).toJSON();
  expect(tree).toMatchSnapshot();
});
