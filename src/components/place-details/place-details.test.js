import React from "react";
import renderer from "react-test-renderer";
import PlaceDetails from "./place-details.jsx";
import createMapBlock from "../map/create-map-block.js";
import cofigureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import thunk from "redux-thunk";
import {createAPI} from "../../api.js";

const api = createAPI(()=>{});

const mockStore = cofigureStore([thunk.withExtraArgument(api)]);

const offer = {
  id: 1,
  isPremium: true,
  price: 822,
  rating: 4,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  images: [``, ``],
  bedrooms: 0,
  maxAdults: 0,
  goods: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
    `Cabel TV`,
    `Fridge`
  ],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  hostName: `Angelina`,
  hostAvatarUrl: ``,
  hostIsPro: true,
  comments: [
    {
      avatar: `img/avatar-max.jpg`,
      name: `Tex`,
      rating: 4,
      text: `A quiet cozy and picturesque that hides behind a a river by the
      unique lightness of Amsterdam. The building is green and from 18th
      century.`,
      time: `June 3019`
    },
    {
      avatar: `img/avatar-max.jpg`,
      name: `Vex`,
      rating: 1,
      text: `atatatatatatat. The building is green and from 18th
    century.`,
      time: `May 2019`
    },
    {
      avatar: `img/avatar-max.jpg`,
      name: `Rex`,
      rating: 3,
      text: `A quiet cozy and picturesque that hides behind a a river by the
  unique lightness of Amsterdam. ataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.`,
      time: `April 2018`
    }
  ]
};

it(`<PlaceDetails /> sould be render`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: {
        Amsterdam: {
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 50.846557,
              longitude: 4.351697,
              zoom: 13
            }
          },
          offers: [
            {
              images: [],
              title: `The house among olive `,
              rating: 3.4,
              type: `apartment`,
              bedrooms: 3,
              price: 148,
              goods: [
                `Washer`,
                `Breakfast`,
                `Laptop friendly workspace`,
                `Dishwasher`,
                `Towels`,
                `Baby seat`,
                `Fridge`,
                `Air conditioning`
              ],
              description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
              location: {
                latitude: 50.869557,
                longitude: 4.332697,
                zoom: 16
              },
              id: 1,
              previewImage: ``,
              isFavorite: false,
              isPremium: true,
              maxAdults: 4,
              hostId: 25,
              hostName: `Angelina`,
              hostIsPro: true,
              hostAvatarUrl: `img/avatar-angelina.jpg`
            }
          ]
        }
      }
    },
    [NameSpace.CITY]: {
      city: `Amsterdam`
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: {
        "id": 1,
        "email": `O@gmail.com`,
        "name": `O`,
        "avatar_url": `/static/avatar/2.jpg`,
        "is_pro": false
      }
    },
    [NameSpace.OFFER]: {
      offer: -1,
      offerAround: [],
      comments: [],
      isSendComment: true
    }
  });
  createMapBlock();
  const tree = renderer
    .create(
        <Provider store={store}>
          <PlaceDetails {...offer} updateStatus={()=>{}}/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
