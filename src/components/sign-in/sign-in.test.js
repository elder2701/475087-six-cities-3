import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Router} from "react-router-dom";
import NameSpace from "../../reducer/name-space.js";
import history from "../../history";

const mockStore = configureStore([]);

it(`<SignIn /> sould be render`, () => {
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
    [NameSpace.CITY]: {city: `Amsterdam`},
    [NameSpace.USER]: {authorizationStatus: AuthorizationStatus.AUTH}
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignIn submit={()=>{}} />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
