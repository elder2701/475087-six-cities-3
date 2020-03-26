import {reducer, ActionCreator, ActionType} from "./offer.js";

it(`Reducer should get correct offer around structure`, () => {
  const state = reducer(
      {offerAround: []},
      {type: ActionType.LOAD_OFFERS_AROUND, payload: [1, 2]}
  );
  expect(state.offerAround.length).toBe(2);
});

it(`Reducer should get correct comments structure`, () => {
  const state = reducer(
      {comments: []},
      {type: ActionType.LOAD_OFFER_COMMENTS, payload: [1, 2]}
  );
  expect(state.comments.length).toBe(2);
});

it(`Reducer should change send status`, () => {
  const state = reducer(
      {isSendComment: true},
      {type: ActionType.SEND_COMMENT_OFFER, payload: false}
  );
  expect(state.isSendComment).toBeFalsy();
});


it(`Action creator for changing comments`, () => {
  const actCreatorResult = ActionCreator.loadOfferComments([1, 2]);
  expect(actCreatorResult.type).toEqual(ActionType.LOAD_OFFER_COMMENTS);
  expect(actCreatorResult.payload.length).toBe(2);
});

it(`Action creator for changing comments`, () => {
  const actCreatorResult = ActionCreator.loadOffersAround([1, 2]);
  expect(actCreatorResult.type).toEqual(ActionType.LOAD_OFFERS_AROUND);
  expect(actCreatorResult.payload.length).toBe(2);
});

it(`Action creator for changing send status`, () => {
  const actCreatorResult = ActionCreator.sendCommentOffer(false);
  expect(actCreatorResult.type).toEqual(ActionType.SEND_COMMENT_OFFER);
  expect(actCreatorResult.payload).toBeFalsy();
});
