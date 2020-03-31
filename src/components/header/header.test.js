import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {Router} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import history from "../../history.js";

it(`<Header /> sould be render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Header
            authorizationStatus={AuthorizationStatus.AUTH}
            userInfo={{email: `123@123.ru`}}
            onLoadFavorites={() => {}}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
