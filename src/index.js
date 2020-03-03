import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import thunk from "redux-thunk";
import withSelectedOffer from "./hoc/with-selected-offer/with-selected-offer.js";
import {createAPI} from "./api.js";
import {OperationOffers} from "./reducer.js";

const api = createAPI(()=>{});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(OperationOffers.loadOffers());

const AppWrapper = withSelectedOffer(App);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapper />
    </Provider>,
    document.getElementById(`root`)
);
