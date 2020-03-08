import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import createMapBlock from "../map/create-map-block.js";
import NameSpace from "../../reducer/name-space.js";

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];
const city = ``;
const mockStore = configureStore([]);

const offers = [
  {
    id: 2,
    figure: `img/room.jpg`,
    mark: ``,
    price: 8220,
    priceText: `night`,
    rating: 2,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  },
  {
    id: 10,
    figure: `img/room.jpg`,
    mark: ``,
    price: 101320,
    priceText: `night`,
    rating: 5,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  },
  {
    id: 3,
    figure: `img/room.jpg`,
    mark: `Premium`,
    price: 83210,
    priceText: `night`,
    rating: 1,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  },
  {
    id: 4,
    figure: ``,
    mark: ``,
    price: 8210,
    priceText: `night`,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [53.369553943508, 5.85309666406198]
  }
];

it(`<Main /> sould be render`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: {
        Amsterdam: {
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 48.85661,
              longitude: 2.351499,
              zoom: 13
            }
          },
          offers: [
            {
              images: [``, ``],
              title: `Amazing and Extremely Central Flat`,
              rating: 1,
              type: `apartment`,
              bedrooms: 4,
              price: 467,
              goods: [`Breakfast`, `Laptop friendly workspace`],
              description: ``,
              location: {
                latitude: 4,
                longitude: 2,
                zoom: 16
              },
              id: 1,
              previewImage: ``,
              isFavorite: false,
              isPremium: false,
              maxAdults: 5,
              hostId: 25,
              hostName: `Angelina`,
              hostIsPro: true,
              hostAvatarUrl: ``
            },
            {
              images: [``],
              title: `Waterfront with extraordinary view`,
              rating: 3,
              type: `room`,
              bedrooms: 1,
              price: 133,
              goods: [`Washer`, `Laptop friendly workspace`],
              description: ``,
              location: {
                latitude: 78.85761,
                longitude: 2.358499,
                zoom: 16
              },
              id: 2,
              previewImage: ``,
              isFavorite: false,
              isPremium: false,
              maxAdults: 2,
              hostId: 25,
              hostName: `Angelina`,
              hostIsPro: true,
              hostAvatarUrl: ``
            }
          ]
        }
      },
      Paris: {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
          }
        },
        offers: []
      }
    },
    [NameSpace.CITY]: `Amsterdam`
  });
  createMapBlock();
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main city={city} places={places} optionSorting="" cityOffers={offers} />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
