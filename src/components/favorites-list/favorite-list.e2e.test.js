import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesList} from "./favorites-list.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {Provider} from "react-redux";
import cofigureStore from "redux-mock-store";
import {createAPI} from "../../api.js";
import thunk from "redux-thunk";

const favorites = {
  Amsterdam: {
    city: {
      name: `Amsterdam`,
      location: {zoom: 1, latitude: 1, longitude: 1}
    },
    offers: [
      {
        images: [``, ``],
        location: {
          zoom: 1,
          latitude: 1,
          longitude: 1
        },
        isPremium: false,
        previewImage: ``,
        price: 12,
        rating: 1,
        id: 1,
        title: ``,
        type: ``,
        bedrooms: 1,
        goods: [``, ``],
        description: ``,
        isFavorite: true,
        maxAdults: 1,
        hostId: 1,
        hostName: ``,
        hostIsPro: true,
        hostAvatarUrl: ``
      }
    ]
  }
};

const api = createAPI(() => {});

const mockStore = cofigureStore([thunk.withExtraArgument(api)]);

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Link onclick`, () => {
  jest.mock(`../../reducer/operation/operation.js`, () => ({
    OperationFavorites: {
      loadFavorites: jest.fn(),
      reserFavorites: jest.fn()
    }
  }));
  const store = mockStore({});
  const selectCity = jest.fn();

  const screen = mount(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesList
            favorites={favorites}
            onLoadFavorites={() => {}}
            onUpdateStatus={() => {}}
            onSelectCity={selectCity}
            onResetFavorites={() => {}}
          />
        </Router>
      </Provider>
  );
  const cityLink = screen.find(`a`).at(0);

  cityLink.simulate(`click`, mockEvent);
  expect(selectCity).toHaveBeenCalledTimes(1);
});
