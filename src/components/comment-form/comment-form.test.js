import React from "react";
import renderer from "react-test-renderer";
import CommentForm from "./comment-form.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`<CommentForm /> sould be render`, () => {
  const store = mockStore({
    [NameSpace.OFFER]: {
      offer: 1,
      isSendComment: true
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <CommentForm
            value={``}
            text={``}
            handleChange={() => {}}
            handleChangeText={() => {}}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
