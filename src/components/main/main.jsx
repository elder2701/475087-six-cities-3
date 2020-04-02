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
  onChangeOptionSorting,
  optionSorting
}) => {
  const placesCount = cityOffers.length;
  const {location} = cityInfo;
  const city = cityInfo.name;
  const offersCoords = Array.from(cityOffers, (item) => {
    return [item.id, item.location];
  });
  const commonDivClasses = placesCount
    ? ``
    : `cities__places-container--empty`;
  const mainClasses = placesCount ? `` : `page__main--index-empty`;
  return (
    <main className={`page__main page__main--index ${mainClasses}`}>
      <h1 className="visually-hidden">Cities</h1>
      <NavCities />
      <div className="cities">
        <div
          className={`cities__places-container container ${commonDivClasses}`}
        >
          {placesCount ? (
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {placesCount} places to stay in {city}
              </b>
              <SortingOptionsWrapper
                onSelectOption={onChangeOptionSorting}
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

Main.propTypes = {
  onChangeOptionSorting: PropTypes.func.isRequired,
  optionSorting: PropTypes.string.isRequired,
  selectedOffer: PropTypes.number,
  onSelectOffer: PropTypes.func.isRequired,
  cityInfo: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  cityOffers: PropTypes.arrayOf(
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
};

const mapStateToProps = (state, props) => {
  return {
    cityOffers: getSortedOffers(state, props),
    cityInfo: getCityInfo(state)
  };
};

export default connect(mapStateToProps)(Main);
