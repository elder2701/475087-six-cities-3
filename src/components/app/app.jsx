import React, {Fragment} from "react";
import Main from "../main/main.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import PlaceDetails from "../place-details/place-details.jsx";
import withOptionSorting from "../../hoc/with-option-sorting/with-option-sorting.js";
import withSelectedOffer from "../../hoc/with-selected-offer/with-selected-offer.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import {OperationAuth} from "../../reducer/operation/operation.js";
import {AppRoute} from "../../const.js";
import FavoritesList from "../favorites-list/favorites-list.jsx";
import {getSelectedOffer} from "../../reducer/offer/selectors.js";

const MainWrapper = withOptionSorting(withSelectedOffer(Main));
const PlaceDetailsWrapper = withSelectedOffer(PlaceDetails);

const App = ({
  cityOffers,
  login,
  authorizationStatus,
  userInfo
}) => {
  return (
    <Fragment>
      <Header authorizationStatus={authorizationStatus} userInfo={userInfo} />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          {cityOffers ? <MainWrapper /> : <div>Loading...</div>}
        </Route>
        {cityOffers ? cityOffers.offers.map((item) => (
          <Route key={item.id} exact path={`/offer/${item.id}`}>
            <PlaceDetailsWrapper {...item} />
          </Route>
        )) : <div>...Loading</div>}
        <Route exact path={AppRoute.LOGIN}>
          <SignIn onSubmit={login}></SignIn>
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <FavoritesList />
        </Route>
      </Switch>
    </Fragment>
  );
};

App.propTypes = {
  selectedOffer: PropTypes.number,
  onSelectOffer: PropTypes.func,
  cityOffers: PropTypes.object,
  city: PropTypes.string,
  login: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => ({
  cityOffers: getCityOffers(state),
  selectedOffer: getSelectedOffer(state)
});
const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(OperationAuth.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
