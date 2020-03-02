import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withOptionSorting from "./with-option-sorting.js";


const MockComponent = () => {
  return <div></div>;
};

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponentWrapper = withOptionSorting(MockComponent);

it(`MockComponent should select option`, ()=>{
  const renderComponent = shallow(<MockComponentWrapper/>);
  renderComponent.instance().changeOptionSorting(`test`);
  expect(renderComponent.state().optionSorting).toBe(`test`);
});
