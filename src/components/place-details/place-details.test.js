import React from "react";
import renderer from "react-test-renderer";
import PlaceDetails from "./place-details.jsx";
import createMapBlock from "../map/create-map-block.js";

const offer = {
  id: 1,
  isPremium: true,
  price: 822,
  rating: 4,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  images: [
    ``,
    ``,
  ],
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

const nearPlaces = [
  {
    id: 3,
    figurePreview: `img/room.jpg`,
    mark: `Premium`,
    price: 822,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    allFigures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    insideFeatures: [`Apartment`, `3 Bedrooms`, `Max 4 adults`],
    insideOptions: [
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
    user: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    status: `pro`,
    coordinates: [52.3909553943508, 4.8544466406198],
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
  }
];


it(`<PlaceDetails /> sould be render`, () => {
  createMapBlock();
  const tree = renderer
    .create(
        <PlaceDetails
          {...offer}
          nearPlaces={nearPlaces}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
