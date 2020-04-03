import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Offer} from "./offer.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

Enzyme.configure({
  adapter: new Adapter()
});

const offer = {
  city: {
    name: ``,
    location: {latitude: 1, longitude: 1, zoom: 1}
  },
  id: 4,
  previewImage: ``,
  price: 8210,
  rating: 4,
  type: `Apartment`,
  images: [``, ``],
  title: ``,
  bedrooms: 1,
  goods: [``, ``],
  description: ``,
  location: {
    latitude: 1,
    longitude: 1,
    zoom: 2
  },
  isFavorite: true,
  isPremium: false,
  maxAdults: 2,
  hostId: 1,
  hostName: ``,
  hostIsPro: true,
  hostAvatarUrl: ``
};

const mockEvent = {
  preventDefault() {}
};

describe(`Clicks events`, () => {
  const updateStatus = jest.fn();
  const screen = mount(
      <Router history={history}>
        <Offer
          authStatus={AuthorizationStatus.AUTH}
          offer={offer}
          onUpdateStatus={updateStatus}
          typeCard={``}
        />
      </Router>
  );
  it(`bookmark onclick`, () => {
    const title = screen.find(`button`);

    title.simulate(`click`, mockEvent);
    expect(updateStatus).toHaveBeenCalledTimes(1);
  });
});
