import React from "react";
import renderer from "react-test-renderer";
import Favorite from "./favorite.jsx";

const favorites = {
  favorites: {
    Amsterdam: {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      offers: [
        {
          images: [``, ``],
          title: `Test`,
          rating: 2.1,
          type: `apartment`,
          bedrooms: 5,
          price: 327,
          goods: [`test1`, `test2`],
          description: `test`,
          location: {
            latitude: 52.37854,
            longitude: 4.894976,
            zoom: 16
          },
          id: 5,
          previewImage: ``,
          isFavorite: true,
          isPremium: false,
          maxAdults: 7,
          hostId: 25,
          hostName: `Angelina`,
          hostIsPro: true,
          hostAvatarUrl: ``
        }
      ]
    }
  }
};

it(`<Favorite /> sould be render`, () => {
  const tree = renderer
    .create(<Favorite favorites={favorites} updateStatus={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
