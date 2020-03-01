import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import withSelectedOffer from "./hoc/with-selected-offer/with-selected-offer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
);

const AppWrapper = withSelectedOffer(App);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapper />
    </Provider>,
    document.getElementById(`root`)
);
