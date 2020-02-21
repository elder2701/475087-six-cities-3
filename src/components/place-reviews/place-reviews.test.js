import React from "react";
import renderer from "react-test-renderer";
import PlaceReviews from "./place-reviews.jsx";

const comments = [
  {
    avatar: `img/avatar-max.jpg`,
    name: `Syn-Vyn`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the
  unique lightness of Amsterdam. The building is green and from 18th
  century.`,
    time: `June 3019`
  },
  {
    avatar: `img/avatar-max.jpg`,
    name: `Maximka`,
    rating: 1,
    text: `opsopsopospospopsopopoppo. The building is green and from 18th
century.`,
    time: `May 2019`
  },
  {
    avatar: `img/avatar-max.jpg`,
    name: `Oledga`,
    rating: 3,
    text: `A quiet cozy and picturesque that hides behind a a river by the
unique lightness of Amsterdam. opssssssssssssssssssssssssssssssssssssssssssssssss.`,
    time: `April 2018`
  }
];


it(`<PlaceReviews /> sould be render`, () => {
  const tree = renderer.create(<PlaceReviews comments={comments}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
