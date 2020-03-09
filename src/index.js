import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";
import withSelectedOffer from "./hoc/with-selected-offer/with-selected-offer.js";
import {createAPI} from "./api.js";
import {OperationOffers} from "./reducer/operation/operation.js";
import {composeWithDevTools} from "redux-devtools-extension";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {Operation as UserOperation} from "./reducer/user/operation.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(OperationOffers.loadOffers());
store.dispatch(UserOperation.checkAuth());

const AppWrapper = withSelectedOffer(App);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapper />
    </Provider>,
    document.getElementById(`root`)
);
