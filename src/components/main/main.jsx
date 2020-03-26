import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import NavCities from "../nav-cities/nav-cities.jsx";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import Map from "../map/map.jsx";
import withOpen from "../../hoc/with-open/with-open.js";
import {connect} from "react-redux";
import {getSortedOffers, getCityInfo} from "../../reducer/data/selectors.js";

const SortingOptionsWrapper = withOpen(SortingOptions);

const Main = ({
  onSelectOffer,
  selectedOffer,
  cityInfo,
  cityOffers,
  changeOptionSorting,
  optionSorting
}) => {
  const placesCount = cityOffers.length;
  const {location} = cityInfo;
  const city = cityInfo.name;
  const offersCoords = Array.from(cityOffers, (item) => {
    return [item.id, item.location];
  });
  const cityPlaceContainerType = placesCount
    ? ``
    : `cities__places-container--empty`;
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavCities />
      <div className="cities">
        <div
          className={`cities__places-container container ${cityPlaceContainerType}`}
        >
          {placesCount ? (
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {placesCount} places to stay in {city}
              </b>
              <SortingOptionsWrapper
                onSelectOption={changeOptionSorting}
                optionSorting={optionSorting}
              />
              <OffersList
                cityOffers={cityOffers}
                onHoverActiveCard={onSelectOffer}
                type={`cities__places-list tabs__content`}
              />
            </section>
          ) : (
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  {`We could not find any property availbale at the moment in ${city}`}
                </p>
              </div>
            </section>
          )}
          <div className="cities__right-section">
            {placesCount ? (
              <Map
                selectedOffer={selectedOffer}
                offersCoords={offersCoords}
                cityLocation={location}
                name={`cities__map`}
              />
            ) : (
              <section className="cities__map map"></section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state, props) => {
  return {
    cityOffers: getSortedOffers(state, props),
    cityInfo: getCityInfo(state)
  };
};

Main.propTypes = {
  changeOptionSorting: PropTypes.func,
  optionSorting: PropTypes.string,
  selectedOffer: PropTypes.number,
  handleSelectOffer: PropTypes.func,
  type: PropTypes.string,
  onSelectOffer: PropTypes.func,
  cityInfo: PropTypes.object.isRequired,
  cityOffers: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Main);
