import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingOptions from "./sorting-options.jsx";


Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Option onclick`, () => {
  const onSelectOption = jest.fn();
  const screen = mount(
      <SortingOptions
        onSelectOption={onSelectOption}
        open={true}
        onCloseOrOpen={() => {}}
        onClose={() => {}}
        optionSorting="Popular"
      />
  );
  const title = screen.find(`li`).at(0);

  title.simulate(`click`, mockEvent);
  expect(onSelectOption).toHaveBeenCalledTimes(1);
});
