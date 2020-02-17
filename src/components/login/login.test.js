import React from "react";
import renderer from "react-test-renderer";
import Login from "./login.jsx";

it(`<Login /> sould be render`, () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
