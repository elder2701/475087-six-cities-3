import React from "react";
import renderer from "react-test-renderer";
import {FavoritesList} from "./favorites-list.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";

const favorites = {
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
        images: [],
        title: `The house among olive `,
        rating: 3.5,
        type: `house`,
        bedrooms: 1,
        price: 633,
        goods: [
          `Breakfast`,
          `Baby seat`,
          `Washer`,
          `Air conditioning`,
          `Laptop friendly workspace`
        ],
        description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
        location: {
          latitude: 52.37154,
          longitude: 4.889976,
          zoom: 16
        },
        id: 26,
        previewImage: ``,
        isFavorite: true,
        isPremium: false,
        maxAdults: 3,
        hostId: 25,
        hostName: `Angelina`,
        hostIsPro: true,
        hostAvatarUrl: `img/avatar-angelina.jpg`
      }
    ]
  },
  Brussels: {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    offers: [
      {
        images: [],
        title: `The Joshua Tree House`,
        rating: 2.6,
        type: `room`,
        bedrooms: 1,
        price: 274,
        goods: [],
        description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
        location: {
          latitude: 50.854557,
          longitude: 4.364697,
          zoom: 16
        },
        id: 9,
        previewImage: ``,
        isFavorite: true,
        isPremium: true,
        maxAdults: 3,
        hostId: 25,
        hostName: `Angelina`,
        hostIsPro: true,
        hostAvatarUrl: ``
      }
    ]
  }
};

it(`<FavoritesList /> sould be render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FavoritesList
            favorites={favorites}
            updateFavoritesWithStaus={() => {}}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
