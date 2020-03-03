import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSelectedOffer from "./with-selected-offer.js";

const MockComponent = () => {
  return <div></div>;
};

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponentWrapper = withSelectedOffer(MockComponent);

it(`MockComponent should select offer`, ()=>{
  const renderComponent = shallow(<MockComponentWrapper/>);
  renderComponent.instance().onSelectOffer(`test`);
  expect(renderComponent.state().selectedOffer).toBe(`test`);
});
