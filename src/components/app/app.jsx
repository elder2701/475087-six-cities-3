import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import PlaceDetails from "../place-details/place-details.jsx";
import withOptionSorting from "../../hoc/with-option-sorting/with-option-sorting.js";
import withSelectedOffer from "../../hoc/with-selected-offer/with-selected-offer.js";
import {getCityOffers} from "../../reducer/data/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import {OperationAuth} from "../../reducer/operation/operation.js";
import {AppRoute, ClassPage} from "../../const.js";
import FavoritesList from "../favorites-list/favorites-list.jsx";
import {getSelectedOffer} from "../../reducer/offer/selectors.js";
import PrivateRoute from "../private-route/private-route.jsx";
import Common from "../common/common.jsx";

const MainWrapper = withOptionSorting(withSelectedOffer(Main));
const PlaceDetailsWrapper = withSelectedOffer(PlaceDetails);

const App = ({cityOffers, login}) => {
  if (!cityOffers) {
    return (<div>Loading...</div>);
  }
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Common classPage={ClassPage.ROOT}>
          <MainWrapper />
        </Common>
      </Route>
      {cityOffers.offers.map((item) => (
        <Route key={item.id} path={`${AppRoute.OFFER}/${item.id}`}>
          <Common classPage={ClassPage.OFFER}>
            <PlaceDetailsWrapper {...item} />
          </Common>
        </Route>
      ))}
      <Route path={AppRoute.LOGIN}>
        <Common classPage={ClassPage.LOGIN}>
          <SignIn submit={login}></SignIn>
        </Common>
      </Route>
      <PrivateRoute
        path={AppRoute.MYLIST}
        render={() => {
          return (
            <Common classPage={ClassPage.MYLIST}>
              <FavoritesList />
            </Common>
          );
        }}
      />
      <Redirect to={AppRoute.ROOT}/>
    </Switch>
  );
};

App.propTypes = {
  cityOffers: PropTypes.object,
  city: PropTypes.string,
  login: PropTypes.func.isRequired
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
