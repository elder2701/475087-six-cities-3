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
      id: `1`,
      offerAround: [],
      comments: [],
      isSendComment: true
    }
  });
  createMapBlock();
  const tree = renderer
    .create(
        <Provider store={store}>
          <PlaceDetails idOffer={`1`} updateStatus={()=>{}} selectOffer={()=>{}}/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
