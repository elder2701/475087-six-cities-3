import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import createMapBlock from "../map/create-map-block.js";
import NameSpace from "../../reducer/name-space.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];
const city = ``;
const mockStore = configureStore([]);

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
            {city: {
              name: ``,
              location: {latitude: 1, longitude: 1, zoom: 1}
            },
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
            {city: {
              name: ``,
              location: {latitude: 1, longitude: 1, zoom: 1}
            },
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
    [NameSpace.CITY]: {city: `Amsterdam`},
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`
    },
  });
  createMapBlock();
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              city={city}
              places={places}
              optionSorting=""
              onSelectOffer={() => {}}
              onChangeOptionSorting={() => {}}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
