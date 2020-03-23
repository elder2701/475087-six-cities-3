import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {Router} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";

it(`<Header /> sould be render`, () => {
  const tree = renderer
    .create(
        <Router>
          <Header
            authorizationStatus={AuthorizationStatus.AUTH}
            userInfo={{email: `123@123.ru`}}
            loadFavorites={() => {}}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
