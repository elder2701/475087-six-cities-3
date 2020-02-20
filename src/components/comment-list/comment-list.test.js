import React from "react";
import renderer from "react-test-renderer";
import CommentList from "./comment-list.jsx";

const comments = [
  {avatar: `img/avatar-max.jpg`,
    name: `Vaya`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the
  unique lightness of Amsterdam. 
  century.`,
    time: `June 3022`
  },
  {avatar: `img/avatar-max.jpg`,
    name: `Mx`,
    rating: 1,
    text: `ycentury.`,
    time: `May 2000`
  },
  {avatar: `img/avatar-max.jpg`,
    name: `Ola`,
    rating: 3,
    text: `A quiet cozy and picturesque that hides behind a a river by theYiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.`,
    time: `April 2000`
  }
];


it(`<CommentList /> sould be render`, () => {
  const tree = renderer
      .create(<CommentList comments={comments} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
