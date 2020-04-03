import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OffersList} from "./offers-list.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const cityOffers = [{
  city: {
    name: ``,
    location: {
      longitude: 1,
      latitude: 1,
      zoom: 1
    }
  },
  id: 12,
  previewImage: ``,
  price: 8220,
  rating: 3,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  isFavorite: false,
  images: [``, ``],
  bedrooms: 1,
  goods: [``, ``],
  description: ``,
  location: {
    latitude: 1,
    longitude: 2,
    zoom: 3
  },
  isPremium: true,
  maxAdults: 1,
  hostId: 1,
  hostName: ``,
  hostIsPro: true,
  hostAvatarUrl: ``
}];

const mockEvent = {
  preventDefault() {}
};

describe(`Mouse events`, () => {
  const hoverActiveCard = jest.fn((...args) => [...args]);

  const screen = shallow(
      <OffersList
        cityOffers={cityOffers}
        onUpdateStatus={()=>{}}
        type={``}
        onHoverActiveCard={hoverActiveCard}
      />
  );
  it(`Mouseover on place card should pass to the callback id of place card`, () => {
    const card = screen.find(`article`);

    card.simulate(`mouseover`, mockEvent);
    expect(hoverActiveCard).toHaveBeenCalledTimes(1);
    expect(hoverActiveCard.mock.calls[0][0]).toBe(cityOffers[0].id);
  });
});
