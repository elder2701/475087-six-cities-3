import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {OperationOffers, changeStructureLoadData} from "./operation.js";
import {ActionType as DataActionType} from "../data/data.js";
import {ActionType as CityActionType} from "../city/city.js";

const api = createAPI(() => {});
const forTest = [
  {
    "city": {
      "name": `Paris`,
      "location": {latitude: 48.85661, longitude: 2.351499, zoom: 13}
    },
    'preview_image': ``,
    "images": [``, ``],
    "title": `Amazing and Extremely Central Flat`,
    'is_favorite': false,
    'is_premium': false,
    "rating": 4.5,
    "type": `apartment`,
    "bedrooms": 4,
    "max_adults": 5,
    "price": 467,
    "goods": [`Breakfast`, `Laptop friendly workspace`, `Washer`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      'is_pro': true,
      'avatar_url': `img/avatar-angelina.jpg`
    },
    "description": ``,
    "location": {latitude: 48.868610000000004, longitude: 2.342499, zoom: 16},
    "id": 1
  },
  {
    "city": {
      "name": `Berlin`,
      "location": {latitude: 48.85661, longitude: 2.351499, zoom: 13}
    },
    'preview_image': ``,
    "images": [``, ``],
    "title": `Amazing and Extremely Central Flat`,
    'is_favorite': false,
    'is_premium': false,
    "rating": 4.5,
    "type": `apartment`,
    "bedrooms": 4,
    'max_adults': 5,
    "price": 467,
    "goods": [`Breakfast`, `Laptop friendly workspace`, `Washer`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": ``,
    "location": {latitude: 48.868610000000004, longitude: 2.342499, zoom: 16},
    "id": 1
  }
];

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, ()=> {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loader = OperationOffers.loadOffers();

    apiMock.onGet(`/hotels`).reply(200, forTest);

    return loader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: DataActionType.LOAD_OFFERS,
        payload: (changeStructureLoadData(forTest))
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: CityActionType.CHENGE_CITY,
        payload: `Berlin`
      });
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
