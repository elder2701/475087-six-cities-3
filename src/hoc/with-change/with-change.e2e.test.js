import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withChange from "./with-change.js";


const MockComponent = () => {
  return <div></div>;
};

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponentWrapper = withChange(MockComponent);

it(`MockComponent should select option`, ()=>{
  const renderComponent = shallow(<MockComponentWrapper/>);
  renderComponent.instance().handleChange(`1`);
  renderComponent.instance().handleChangeText(`testText`);
  expect(renderComponent.state().value).toBe(`1`);
  expect(renderComponent.state().text).toBe(`testText`);
});
