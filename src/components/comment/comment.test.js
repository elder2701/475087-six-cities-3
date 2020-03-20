import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment.jsx";

const comment = {
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
};

it(`<Comment /> sould be render`, () => {
  const tree = renderer
      .create(<Comment {...comment}/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
