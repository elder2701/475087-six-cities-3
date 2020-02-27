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

const screen = mount(<SortingOptions />);
