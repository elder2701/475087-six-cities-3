import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withOpen from "./with-open.js";

const MockComponent = () => {
  return <div></div>;
};

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponentWrapper = withOpen(MockComponent);

describe(`State tests`, ()=>{
  const renderComponent = shallow(<MockComponentWrapper/>);

  it(`MockComponent is open`, ()=>{
    renderComponent.instance().handleClose();
    expect(renderComponent.state().open).toBeFalsy();

  });

  it(`MockComponent is open`, ()=>{
    renderComponent.instance().handleCloseOrOpen(false);
    expect(renderComponent.state().open).toBeTruthy();
  });
});
