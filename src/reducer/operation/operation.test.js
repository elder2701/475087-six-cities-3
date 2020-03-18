import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {
  OperationOffers,
  changeStructureLoadData,
  OperationAuth,
  OperationOffer,
  OperationComment
} from "./operation.js";
import {ActionType as DataActionType} from "../data/data.js";
import {ActionType as CityActionType} from "../city/city.js";
import {ActionType as OfferActionType} from "../offer/offer.js";
import {
  ActionType as AuthActionType,
  AuthorizationStatus
} from "../user/user.js";

const api = createAPI(() => {});
const forTestOffers = [
  {
    city: {
      name: `Paris`,
      location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}
    },
    preview_image: ``,
    images: [``, ``],
    title: `Amazing and Extremely Central Flat`,
    is_favorite: false,
    is_premium: false,
    rating: 4.5,
    type: `apartment`,
    bedrooms: 4,
    max_adults: 5,
    price: 467,
    goods: [`Breakfast`, `Laptop friendly workspace`, `Washer`],
    host: {
      id: 25,
      name: `Angelina`,
      is_pro: true,
      avatar_url: `img/avatar-angelina.jpg`
    },
    description: ``,
    location: {latitude: 48.868610000000004, longitude: 2.342499, zoom: 16},
    id: 1
  },
  {
    city: {
      name: `Berlin`,
      location: {latitude: 48.85661, longitude: 2.351499, zoom: 13}
    },
    preview_image: ``,
    images: [``, ``],
    title: `Amazing and Extremely Central Flat`,
    is_favorite: false,
    is_premium: false,
    rating: 4.5,
    type: `apartment`,
    bedrooms: 4,
    max_adults: 5,
    price: 467,
    goods: [`Breakfast`, `Laptop friendly workspace`, `Washer`],
    host: {
      id: 25,
      name: `Angelina`,
      is_pro: true,
      avatar_url: `img/avatar-angelina.jpg`
    },
    description: ``,
    location: {latitude: 48.868610000000004, longitude: 2.342499, zoom: 16},
    id: 1
  }
];

const userInfoTest = {
  avatar_url: ``,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  is_pro: false,
  name: `Oliver.conner`
};

const hotels = [
  {
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`
    ],
    hostAvatarUrl: `img/1.png`,
    hostId: 3,
    hostIsPro: true,
    hostName: `Angelina`,
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  }
];

const hotelsOrigin = [{
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatar_url": `img/1.png`,
    "id": 3,
    "is_pro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`img/1.png`, `img/2.png`],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
}];

const comments = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatar_url: `img/1.png`,
      id: 4,
      is_pro: false,
      name: `Max`
    }
  }
];

describe(`Operation work correctly`, () => {
  const apiMock = new MockAdapter(api);
  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const loader = OperationOffers.loadOffers();
    apiMock.onGet(`/hotels`).reply(200, forTestOffers);

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DataActionType.LOAD_OFFERS,
        payload: changeStructureLoadData(forTestOffers)
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: CityActionType.CHENGE_CITY,
        payload: `Berlin`
      });
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });

  it(`Should make a correct API call to /login. Checking authorization`, () => {
    const dispatch = jest.fn();
    const loader = OperationAuth.checkAuth();
    apiMock.onGet(`/login`).reply(200, userInfoTest);
    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: AuthActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: AuthActionType.LOAD_USER_INFO,
        payload: userInfoTest
      });
    });
  });

  it(`Should make a correct API call to /login. Authorization`, () => {
    const dispatch = jest.fn();
    const loader = OperationAuth.login({
      email: `Oliver.conner@gmail.com`,
      password: `12345678`
    });
    apiMock.onPost(`/login`).reply(200, userInfoTest);

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: AuthActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: AuthActionType.LOAD_USER_INFO,
        payload: userInfoTest
      });
    });
  });

  it(`Should make a correct API call to /comment/:id. Send comment`, () => {
    const dispatch = jest.fn();
    const loader = OperationComment.sendComment(1, {
      comment: `testnamesstestnamesstestnamesstestnamesstestnamess`,
      rating: `3`
    });
    apiMock.onPost(`/comment/1`).reply(200, {
      comment: `testnamesstestnamesstestnamesstestnamesstestnamess`,
      rating: `3`
    });

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: OfferActionType.SEND_COMMENT_OFFER,
        payload: true
      });
    });
  });

  it(`Should make a correct API call to /comments/:id. Get comments`, () => {
    const dispatch = jest.fn();
    const loader = OperationOffer.loadOfferComments(1);
    apiMock.onGet(`/comments/1`).reply(200, comments);

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: OfferActionType.LOAD_OFFER_COMMENTS,
        payload: comments
      });
    });
  });

  it(`Should make a correct API call to /hotels/:id/nearby. Get hotels`, () => {
    const dispatch = jest.fn();
    const loader = OperationOffer.loadOffersAround(1);
    apiMock.onGet(`/hotels/1/nearby`).reply(200, hotelsOrigin);

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: OfferActionType.LOAD_OFFERS_AROUND,
        payload: hotels
      });
    });
  });
});
