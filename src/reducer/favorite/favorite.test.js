import {reducer, ActionCreator, ActionType} from "./favorite.js";

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
        },
        {
          images: [``, ``],
          title: `Wood and stone place`,
          rating: 3.7,
          type: `house`,
          bedrooms: 5,
          price: 528,
          goods: [`Breakfast`, `Washer`, `Laptop friendly workspace`],
          description: `test`,
          location: {
            latitude: 52.35054,
            longitude: 4.908976,
            zoom: 16
          },
          id: 3,
          previewImage: ``,
          isFavorite: true,
          isPremium: false,
          maxAdults: 8,
          hostId: 25,
          hostName: `Angelina`,
          hostIsPro: true,
          hostAvatarUrl: ``
        }
      ]
    }
  }
};

it(`Reducer should change offer`, () => {
  expect(
      reducer(
          {favorites: {}},
          {type: ActionType.LOAD_FAVORITES, payload: favorites}
      )
  ).toEqual({favorites});
});

it(`Action creator for changing favorites`, () => {
  expect(ActionCreator.loadFavorites(favorites)).toEqual({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  });
});
