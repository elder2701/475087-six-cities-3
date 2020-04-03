import React from "react";
import renderer from "react-test-renderer";
import FavoritesList from "./favorites-list.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import cofigureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {createAPI} from "../../api.js";
import thunk from "redux-thunk";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const api = createAPI(() => {});

const mockStore = cofigureStore([thunk.withExtraArgument(api)]);

it(`<FavoritesList /> sould be render`, () => {
  jest.mock(`../../reducer/operation/operation.js`, () => ({
    OperationFavorites: {
      loadFavorites: jest.fn(),
      reserFavorites: jest.fn()
    }
  }));
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
    [NameSpace.FAVORITE]: {
      favorites: {
        Amsterdam: {
          city: {
            name: `Amsterdam`,
            location: {latitude: 1, longitude: 2, zoom: 3}
          },
          offers: [
            {city: {
              name: ``,
              location: {latitude: 1, longitude: 1, zoom: 1}
            },
            isPremium: false,
            previewImage: ``,
            price: 12,
            rating: 1,
            id: 1,
            title: ``,
            type: ``,
            images: [``, ``],
            bedrooms: 1,
            goods: [``, ``],
            description: ``,
            location: {
              latitude: 1,
              longitude: 1,
              zoom: 1
            },
            isFavorite: true,
            maxAdults: 1,
            hostId: 1,
            hostName: ``,
            hostIsPro: true,
            hostAvatarUrl: ``
            }
          ]
        }
      }
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesList onUpdateStatus={() => {}} />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
