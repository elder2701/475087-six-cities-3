import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history.js";

const offer = {
  id: 4,
  figurePreview: ``,
  mark: ``,
  price: 8210,
  rating: 4,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`
};

const mockStore = configureStore([]);

it(`<Offer /> sould be render`, () => {
  const store = mockStore({});
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Offer
              offer={offer}
              typeCard={``}
              onUpdateStatus={() => {}}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
