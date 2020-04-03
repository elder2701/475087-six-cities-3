import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";

const mockStore = configureStore([]);

const offers = [
  {
    id: 12,
    previewImage: ``,
    price: 8220,
    rating: 3,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isFavorite: false,
    images: [``, ``],
    bedrooms: 1,
    goods: [``, ``],
    description: ``,
    location: {
      latitude: 1,
      longitude: 2,
      zoom: 3
    },
    isPremium: true,
    maxAdults: 1,
    hostId: 1,
    hostName: ``,
    hostIsPro: true,
    hostAvatarUrl: ``
  },
  {
    id: 1,
    previewImage: ``,
    price: 8220,
    rating: 3,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isFavorite: false,
    images: [``, ``],
    bedrooms: 1,
    goods: [``, ``],
    description: ``,
    location: {
      latitude: 2,
      longitude: 2,
      zoom: 3
    },
    isPremium: true,
    maxAdults: 1,
    hostId: 3,
    hostName: ``,
    hostIsPro: true,
    hostAvatarUrl: ``
  }
];

it(`<OffersList /> sould be render`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <OffersList
              cityOffers={offers}
              type={``}
              onUpdateStatus={() => {}}
              onHoverActiveCard={() => {}}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
