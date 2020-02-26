import {NavCities} from "./nav-cities.jsx";
import React from "react";
import renderer from "react-test-renderer";

it(`<NavCities /> sould be render`, () => {
  const tree = renderer
    .create(<NavCities onChangeCity={() => {}} getCityOffers={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
