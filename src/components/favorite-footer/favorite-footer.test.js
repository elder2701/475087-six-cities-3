import React from "react";
import renderer from "react-test-renderer";
import FavoriteFooter from "./favorite-footer.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`<FavoriteFooter /> sould be render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FavoriteFooter />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
