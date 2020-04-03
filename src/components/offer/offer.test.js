import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import NameSpace from "../../reducer/name-space.js";

const offer = {
  city: {
    name: ``,
    location: {latitude: 1, longitude: 1, zoom: 1}
  },
  id: 4,
  previewImage: ``,
  price: 8210,
  rating: 4,
  type: `Apartment`,
  images: [``, ``],
  title: ``,
  bedrooms: 1,
  goods: [``, ``],
  description: ``,
  location: {
    latitude: 1,
    longitude: 1,
    zoom: 2
  },
  isFavorite: true,
  isPremium: false,
  maxAdults: 2,
  hostId: 1,
  hostName: ``,
  hostIsPro: true,
  hostAvatarUrl: ``
};

const mockStore = configureStore([]);

it(`<Offer /> sould be render`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {id: 1, email: ``}
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Offer offer={offer} typeCard={``} onUpdateStatus={() => {}} />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
