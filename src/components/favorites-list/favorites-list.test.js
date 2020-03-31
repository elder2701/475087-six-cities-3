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
    [NameSpace.FAVORITE]: {
      favorites: {
        Amsterdam: {
          city: {name: `Amsterdam`},
          offers: [
            {
              isPremium: false,
              previewImage: ``,
              price: 12,
              rating: 1,
              id: 1,
              title: ``,
              type: ``
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
            <FavoritesList/>
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
