import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CommentForm from "./comment-form.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

describe(`Click events`, () => {
  const store = mockStore({
    [NameSpace.OFFER]: {
      offer: 1,
      isSendComment: true
    }
  });
  const text = `qwertqwertqwertqwertqwertqwertqwertqwertqwertqwert`;
  const clickStar = jest.fn();
  const clickSubmit = jest.fn();

  const screen = mount(
      <Provider store={store}>
        <CommentForm
          value={`1`}
          text={text}
          handleChangeText = {()=>{}}
          handleChange={()=>{}}
        />
      </Provider>
  );

  it(`Start click`, () => {
    const star = screen.find(`input`).at(0);

    star.simulate(`change`, mockEvent);
    expect(clickStar).toHaveBeenCalledTimes(1);
  });

  it(`Submit click`, () => {
    const form = screen.find(`form`);

    form.simulate(`click`, mockEvent);
    expect(clickSubmit).toHaveBeenCalledTimes(1);
  });
});
