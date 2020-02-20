import React from "react";
import renderer from "react-test-renderer";
import NearOffersList from "./near-offers-list.jsx";

const offers = [
  {
    id: 1,
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
    coordinates: [52.3909553943508, 4.85309666406198],
    comments: [
      {avatar: `img/avatar-max.jpg`,
        name: `Tex`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the
      unique lightness of Amsterdam. The building is green and from 18th
      century.`,
        time: `June 3019`
      },
      {avatar: `img/avatar-max.jpg`,
        name: `Vex`,
        rating: 1,
        text: `atatatatatatat. The building is green and from 18th
    century.`,
        time: `May 2019`
      },
      {avatar: `img/avatar-max.jpg`,
        name: `Rex`,
        rating: 3,
        text: `A quiet cozy and picturesque that hides behind a a river by the
  unique lightness of Amsterdam. ataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.`,
        time: `April 2018`
      }
    ]
  },
  {
    id: 2,
    figurePreview: `img/room.jpg`,
    mark: ``,
    price: 20,
    priceText: `night`,
    rating: 5,
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
    status: ``,
    coordinates: [52.369553943508, 4.85309666406198],
    comments: [
      {avatar: `img/avatar-max.jpg`,
        name: `Vasya`,
        rating: 4,
        text: `A quiet cozy and picturesque that hides behind a a river by the
      unique lightness of Amsterdam. The building is green and from 18th
      century.`,
        time: `June 3019`
      },
      {avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 1,
        text: `yiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii. The building is green and from 18th
    century.`,
        time: `May 2019`
      },
      {avatar: `img/avatar-max.jpg`,
        name: `Olga`,
        rating: 3,
        text: `A quiet cozy and picturesque that hides behind a a river by the
  unique lightness of Amsterdam. Yiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.`,
        time: `April 2018`
      }
    ]
  }
];

it(`<NearOffersList /> sould be render`, () => {
  const tree = renderer
    .create(<NearOffersList places={offers} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
