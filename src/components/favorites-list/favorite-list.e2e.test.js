import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FavoritesList from "./favorites-list.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";
import {Provider} from "react-redux";
import cofigureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {createAPI} from "../../api.js";
import thunk from "redux-thunk";


const api = createAPI(()=>{});

const mockStore = cofigureStore([thunk.withExtraArgument(api)]);

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(`Link onclick`, () => {
  jest.mock(`../../reducer/operation/operation.js`, () => ({
    OperationFavorites: {
      loadFavorites: jest.fn(),
      reserFavorites: jest.fn()
    }
  }));
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
      offer: 1,
      offerAround: [],
      comments: [],
      isSendComment: true
    },
    [NameSpace.FAVORITE]: {
      favorites: {
        Amsterdam: {
          city: {name: `Amsterdam`},
          offers: [
            {
              isPremium: false,
              previewImage: ``,
              price: 12,
              rating: 1,
              id: 1,
              title: ``,
              type: ``
            }
          ]
        }
      }
    }
  });
  const selectCity = jest.fn();

  const screen = mount(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesList
            updateStatus={() => {}}
            selectCity={selectCity}
          />
        </Router>
      </Provider>
  );
  const cityLink = screen.find(`a`).at(0);

  cityLink.simulate(`click`, mockEvent);
  expect(selectCity).toHaveBeenCalledTimes(1);
});
