import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`<PlaceReviews /> sould be render auth`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PrivateRoute
            render={() => <div></div>}
            authStatus={AuthorizationStatus.AUTH}
            path={`/`}
            exact
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`<PlaceReviews /> sould be render not auth`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PrivateRoute
            render={() => <div></div>}
            authStatus={AuthorizationStatus.NO_AUTH}
            path={`/`}
            exact
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
