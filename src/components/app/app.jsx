import React from "react";
import Main from "../main/main.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PlaceDetails from "../place-details/place-details.jsx";
import withOptionSorting from "../../hoc/with-option-sorting/with-option-sorting.js";
import withSelectedOffer from "../../hoc/with-selected-offer/with-selected-offer.js";
import {getCityOffers} from "../../reducer.js";


const MainWrapper = withOptionSorting(withSelectedOffer(Main));
const PlaceDetailsWrapper = withSelectedOffer(PlaceDetails);

const App = ({city, cityOffers, selectedOffer, onSelectOffer}) => {
  console.log(getCityOffers());
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
              handleSelectOffer={onSelectOffer}
            />
          ) : (
            <MainWrapper
              cityOffers={cityOffers}
              handleSelectOffer={onSelectOffer}
              city={city}
            />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  selectedOffer: PropTypes.number,
  onSelectOffer: PropTypes.func.isRequired,
  cityOffers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  cityOffers: getCityOffers(state)
});

export {App};
export default connect(mapStateToProps)(App);
