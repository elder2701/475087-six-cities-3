import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {composeWithDevTools} from "redux-devtools-extension";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {OperationAuth, OperationOffers} from "./reducer/operation/operation.js";
import history from "./history.js";
import {AppRoute} from "./const.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  store.dispatch(ActionCreator.loadUserInfo({}));
  history.push(AppRoute.LOGIN);
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(OperationOffers.loadOffers());
store.dispatch(OperationAuth.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
