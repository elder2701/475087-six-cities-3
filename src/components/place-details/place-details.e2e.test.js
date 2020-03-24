import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceDetails} from "./place-details.jsx";

const offer = {
  id: 1,
  isPremium: true,
  price: 822,
  rating: 4,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  images: [``, ``],
  bedrooms: 0,
  maxAdults: 0,
  goods: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
    `Cabel TV`,
    `Fridge`
  ],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  hostName: `Angelina`,
  hostAvatarUrl: ``,
  hostIsPro: true,
  comments: [
    {
      avatar: `img/avatar-max.jpg`,
      name: `Tex`,
      rating: 4,
      text: `A quiet cozy and picturesque that hides behind a a river by the
      unique lightness of Amsterdam. The building is green and from 18th
      century.`,
      time: `June 3019`
    },
    {
      avatar: `img/avatar-max.jpg`,
      name: `Vex`,
      rating: 1,
      text: `atatatatatatat. The building is green and from 18th
    century.`,
      time: `May 2019`
    },
    {
      avatar: `img/avatar-max.jpg`,
      name: `Rex`,
      rating: 3,
      text: `A quiet cozy and picturesque that hides behind a a river by the
  unique lightness of Amsterdam. ataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.`,
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
  const handleChangeFavorite = jest.fn();
  const screen = shallow(
      <PlaceDetails
        {...offer}
        updateStatus={handleChangeFavorite}
        cityInfo={{location: {longitude: 1, latitude: 1, zoom: 1}}}
        nearPlaces={[]}
      />
  );

  it(`Button click`, () => {
    const button = screen.find(`button`);
    button.simulate(`click`, mockEvent);
    expect(handleChangeFavorite).toHaveBeenCalledTimes(1);
  });
});
