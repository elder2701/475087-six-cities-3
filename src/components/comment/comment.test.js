import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment.jsx";

const comment = {
  avatar: `img/avatar-max.jpg`,
  name: `Ola`,
  rating: 3,
  text: `A quiet cozy and picturesque that hides behind a a river by theYiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.`,
  time: `April 2000`
};

it(`<Comment /> sould be render`, () => {
  const tree = renderer
      .create(<Comment {...comment}/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
