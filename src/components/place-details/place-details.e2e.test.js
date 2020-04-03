import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceDetails} from "./place-details.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const offer = {
  city: {
    name: ``,
    location: {latitude: 1, longitude: 1, zoom: 1}
  },
  id: 1,
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 1,
    longitude: 1,
    zoom: 2
  },
  price: 822,
  rating: 4,
  title: ``,
  type: `Apartment`,
  images: [``, ``],
  bedrooms: 0,
  maxAdults: 0,
  goods: [`Wi-Fi`, `Washing machine`],
  description: ``,
  hostName: `Angelina`,
  hostAvatarUrl: ``,
  hostId: 1,
  hostIsPro: true,
  previewImage: ``,
  comments: [
    {
      avatar: `img/avatar-max.jpg`,
      name: `Tex`,
      rating: 4,
      text: ``,
      time: `June 3019`
    },
    {
      avatar: `img/avatar-max.jpg`,
      name: `Vex`,
      rating: 1,
      text: ``,
      time: `May 2019`
    },
    {
      avatar: `img/avatar-max.jpg`,
      name: `Rex`,
      rating: 3,
      text: ``,
      time: `April 2018`
    }
  ]
};

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

describe(`Mouse events`, () => {
  const changeFavorite = jest.fn();
  const screen = shallow(
      <PlaceDetails
        authStatus ={AuthorizationStatus.AUTH}
        idOffer={`1`}
        details={offer}
        onUpdateStatus={changeFavorite}
        cityInfo={{
          name: `Amster`,
          location: {longitude: 1, latitude: 1, zoom: 1}
        }}
        nearPlaces={[]}
        onUpdateOfferInfo={() => {}}
        onSelectOffer={() => {}}
        comments={[]}
        resetId={() => {}}
        onResetOfferInfo={() => {}}
      />
  );

  it(`Button click`, () => {
    const button = screen.find(`button`);
    button.simulate(`click`, mockEvent);
    expect(changeFavorite).toHaveBeenCalledTimes(1);
  });
});
