import React from "react";
import renderer from "react-test-renderer";
import PlaceReviews from "./place-reviews.jsx";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Provider} from "react-redux";
const comments = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }
];

const mockStore = configureStore({});

it(`<PlaceReviews /> sould be render`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {id: 1, email: ``}
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <PlaceReviews comments={comments} selectedId={1}/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
