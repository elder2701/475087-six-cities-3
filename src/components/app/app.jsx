import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import PlaceDetails from "../place-details/place-details.jsx";
import withOptionSorting from "../../hoc/with-option-sorting/with-option-sorting.js";
import withSelectedOffer from "../../hoc/with-selected-offer/with-selected-offer.js";
import {getCityOffers, getFailStatus} from "../../reducer/data/selectors.js";
import SignIn from "../sign-in/sign-in.jsx";
import {OperationAuth} from "../../reducer/operation/operation.js";
import {AppRoute, ClassPage} from "../../const.js";
import FavoritesList from "../favorites-list/favorites-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import Common from "../common/common.jsx";

const MainWrapper = withOptionSorting(withSelectedOffer(Main));
const PlaceDetailsWrapper = withSelectedOffer(PlaceDetails);

const App = ({cityOffers, onLogin, failStatus}) => {
  if (failStatus) {
    return <div>Server is not available </div>;
  }
  if (!cityOffers) {
    return <div>Loading...</div>;
  }
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <Common classPage={ClassPage.ROOT}>
          <MainWrapper />
        </Common>
      </Route>
      <Route
        path={AppRoute.OFFER}
        render={(routeProps) => {
          const id = routeProps.match.params.id;
          return (
            <Common classPage={ClassPage.OFFER}>
              <PlaceDetailsWrapper idOffer={id} />
            </Common>
          );
        }}
      />
      <Route path={AppRoute.LOGIN}>
        <Common classPage={ClassPage.LOGIN}>
          <SignIn onLogin={onLogin}></SignIn>
        </Common>
      </Route>
      <PrivateRoute
        path={AppRoute.MYLIST}
        exact
        render={() => {
          return (
            <Common classPage={ClassPage.MYLIST}>
              <FavoritesList />
            </Common>
          );
        }}
      />
      <Redirect to={AppRoute.ROOT} />
    </Switch>
  );
};

App.propTypes = {
  cityOffers: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    offers: PropTypes.arrayOf(
        PropTypes.shape({
          images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          title: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          bedrooms: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          description: PropTypes.string.isRequired,
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          }).isRequired,
          id: PropTypes.number.isRequired,
          previewImage: PropTypes.string.isRequired,
          isFavorite: PropTypes.bool.isRequired,
          isPremium: PropTypes.bool.isRequired,
          maxAdults: PropTypes.number.isRequired,
          hostId: PropTypes.number.isRequired,
          hostName: PropTypes.string.isRequired,
          hostIsPro: PropTypes.bool.isRequired,
          hostAvatarUrl: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  }),
  city: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
  failStatus: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  cityOffers: getCityOffers(state),
  failStatus: getFailStatus(state)
});
const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(OperationAuth.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
