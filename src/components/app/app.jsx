import React from "react";
import Main from "../main/main.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Router, Route, Switch} from "react-router-dom";
import PlaceDetails from "../place-details/place-details.jsx";
import withOptionSorting from "../../hoc/with-option-sorting/with-option-sorting.js";
import withSelectedOffer from "../../hoc/with-selected-offer/with-selected-offer.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import {OperationAuth} from "../../reducer/operation/operation.js";
import history from "../../history";
import {AppRoute} from "../../const.js";
import Favorites from "../favorites/favorites.jsx";

const MainWrapper = withOptionSorting(withSelectedOffer(Main));
const PlaceDetailsWrapper = withSelectedOffer(PlaceDetails);

const App = ({
  cityOffers,
  selectedOffer,
  onSelectOffer,
  login,
  authorizationStatus,
  userInfo
}) => {
  let offer = null;
  if (cityOffers) {
    offer = cityOffers.offers.find((item) => item.id === selectedOffer);
  }
  // const nearPlaces = cityOffers.filter((item) => item.id !== selectedOffer);
  return (
    <Router history={history}>
      <Header authorizationStatus={authorizationStatus} userInfo={userInfo} />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          {cityOffers ? (
            <React.Fragment>
              {offer ? (
                <PlaceDetailsWrapper
                  {...offer}
                  handleSelectOffer={onSelectOffer}
                />
              ) : (
                <MainWrapper handleSelectOffer={onSelectOffer} />
              )}
            </React.Fragment>
          ) : (
            <div>Loading...</div>
          )}
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn onSubmit={login}></SignIn>
        </Route>
        <Route>
          <Favorites></Favorites>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  selectedOffer: PropTypes.number,
  onSelectOffer: PropTypes.func.isRequired,
  cityOffers: PropTypes.object,
  city: PropTypes.string,
  login: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  cityOffers: getCityOffers(state)
});
const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(OperationAuth.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
