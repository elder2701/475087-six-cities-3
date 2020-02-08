import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];

it(`Sould welcome button be pressed`, () => {
  const onCityHeaderClick = jest.fn();

  const main = mount(
      <Main
        placesCount={3}
        onCityHeaderClick={onCityHeaderClick}
        places={places}
      />
  );
  let headerButton = main.find(`a.locations__item-link`);
  for (let i = 0; i < headerButton.length; i++) {
    headerButton.at(i).simulate(`click`);
  }

  expect(onCityHeaderClick.mock.calls.length).toBe(headerButton.length);
});
