import React from "react";
import Main from "../main/main.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlaceDetails from "../place-details/place-details.jsx";
import withHoveredPlace from "../../hoc/with-hovered-place/with-hovered-place.js";
import withOptionSorting from "../../hoc/with-option-sorting/with-option-sorting.js";

const MainWrapper = withOptionSorting(withHoveredPlace(Main));
const PlaceDetailsWrapper = withHoveredPlace(PlaceDetails);

const App = ({city, cityOffers, selectedOffer, onSelectOffer}) => {
  const offer = cityOffers.find((item) => item.id === selectedOffer);
  const nearPlaces = cityOffers.filter((item) => item.id !== selectedOffer);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          {offer ? (
            <PlaceDetailsWrapper
              {...offer}
              nearPlaces={nearPlaces}
              onSelectOffer={onSelectOffer}
            />
          ) : (
            <MainWrapper
              cityOffers={cityOffers}
              onSelectOffer={onSelectOffer}
              city={city}
            />
          )}
        </Route>
        <Route exact path="/dev-component">
          <PlaceDetailsWrapper {...cityOffers[1]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  selectedOffer: PropTypes.number,
  onSelectOffer: PropTypes.func.isRequired,
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        figurePreview: PropTypes.string,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        allFigures: PropTypes.arrayOf(PropTypes.string),
        insideFeatures: PropTypes.arrayOf(PropTypes.string),
        insideOptions: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        user: PropTypes.string,
        avatar: PropTypes.string,
        status: PropTypes.string
      }).isRequired
  ).isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  cityOffers: state.cityOffers
});

export {App};
export default connect(mapStateToProps)(App);
