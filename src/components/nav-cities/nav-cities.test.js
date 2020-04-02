import {NavCities} from "./nav-cities.jsx";
import React from "react";
import renderer from "react-test-renderer";

it(`<NavCities /> sould be render`, () => {
  const tree = renderer
    .create(
        <NavCities
          cities={[`qwe`, `das`]}
          onChangeCity={() => {}}
          getCityOffers={() => {}}
          activeCity={``}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
