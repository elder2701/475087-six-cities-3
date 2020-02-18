import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

const offer = {
  id: 3,
  figurePreview: `img/room.jpg`,
  mark: `Premium`,
  price: 82,
  rating: 1,
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
  status: `pro`
};

it(`<Property /> sould be render`, () => {
  const tree = renderer.create(<Property {...offer} />).toJSON();
  expect(tree).toMatchSnapshot();
});
