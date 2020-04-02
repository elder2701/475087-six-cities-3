import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Offer} from "./offer.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
  id: 12,
  figurePreview: ``,
  mark: `Premium`,
  price: 8220,
  rating: 3,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`
};

const mockEvent = {
  preventDefault() {}
};

describe(`Clicks events`, () => {
  const updateStatus = jest.fn();
  const screen = mount(
      <Router history={history}>
        <Offer offer={offer} onUpdateStatus={updateStatus} typeCard={``}/>
      </Router>
  );
  it(`bookmark onclick`, () => {
    const title = screen.find(`button`);

    title.simulate(`click`, mockEvent);
    expect(updateStatus).toHaveBeenCalledTimes(1);
  });


});
