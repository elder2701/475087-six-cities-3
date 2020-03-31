import React from "react";
import renderer from "react-test-renderer";
import {CommentForm} from "./comment-form.jsx";

it(`<CommentForm /> sould be render`, () => {
  const tree = renderer
    .create(
        <CommentForm
          value={``}
          text={``}
          onChange={() => {}}
          onChangeText={() => {}}
          onSending={()=>{}}
          onSendComment={()=>{}}
          selectedId={1}
          isSendComment={true}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
