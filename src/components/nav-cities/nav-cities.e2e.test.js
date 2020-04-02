import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {NavCities} from "./nav-cities.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Link onclick`, () => {
  const selectCity = jest.fn();

  const screen = mount(
      <NavCities
        cities={[`test1`, `test2`]}
        activeCity={`test1`}
        onChangeCity={selectCity}
      />
  );
  const cityLink = screen.find(`a`).at(0);

  cityLink.simulate(`click`, mockEvent);
  expect(selectCity).toHaveBeenCalledTimes(1);
});
