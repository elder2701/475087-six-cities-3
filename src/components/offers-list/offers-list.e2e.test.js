import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OffersList from "./offers-list.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const offers = [
  {
    id: 12,
    figure: ``,
    mark: `Premium`,
    price: 8220,
    priceText: `night`,
    rating: 3,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`
  }
];

const mockEvent = {
  preventDefault() {}
};

it(`Mouseover on place card should pass to the callback id of place card`, () => {
  const onHoverActiveCard = jest.fn((...args) => [...args]);

  const screen = mount(<OffersList
    offers={offers}
    onHoverActiveCard={onHoverActiveCard}
  />);

  const card = screen.find(`article`);
  const firstCard = card.at(0);

  firstCard.simulate(`mouseover`, mockEvent);
  expect(onHoverActiveCard).toHaveBeenCalledTimes(1);
  expect(onHoverActiveCard.mock.calls[0][0]).toBe(offers(0).id);
});
