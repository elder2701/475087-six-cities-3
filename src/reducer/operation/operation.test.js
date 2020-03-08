import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {OperationOffers} from "./operation.js";
import {ActionType as DataActionType} from "../data/data.js";

const api = createAPI(() => {});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loader = OperationOffers.loadOffers();

    apiMock
        .onGet(`/hotels`)
        .reply(200, [{fake: true}]);

    return loader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: DataActionType.LOAD_OFFERS,
            payload: [{fake: true}],
          });
          expect(dispatch).toHaveBeenCalledTimes(2);
        });
  });
});
