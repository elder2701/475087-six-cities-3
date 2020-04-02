import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CommentForm} from "./comment-form.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

describe(`Click events`, () => {
  const text = `qwertqwertqwertqwertqwertqwertqwertqwertqwertqwert`;
  const clickStar = jest.fn();
  const clickSubmit = jest.fn();

  const screen = mount(
      <CommentForm
        value={`1`}
        text={text}
        onChangeText = {()=>{}}
        onChange={clickStar}
        selectedId={1}
        isSendComment={true}
        onSendComment={clickSubmit}
        onSending={()=>{}}

      />
  );

  it(`Start click`, () => {
    const star = screen.find(`input`).at(0);

    star.simulate(`change`, mockEvent);
    expect(clickStar).toHaveBeenCalledTimes(1);
  });

  it(`Submit click`, () => {
    const form = screen.find(`form`);

    form.simulate(`submit`, mockEvent);
    expect(clickSubmit).toHaveBeenCalledTimes(1);
  });
});
