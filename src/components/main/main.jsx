import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import NavCities from "../nav-cities/nav-cities.jsx";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import Map from "../map/map.jsx";
import withOpen from "../../hoc/with-open/with-open.js";

const SortingOptionsWrapper = withOpen(SortingOptions);

const offersSortingByOption = (offers, option) => {
  switch (option) {
    case `Price: low to high`:
      return offers.slice().sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return offers.slice().sort((a, b) => -a.price + b.price);
    case `Top rated first`:
      return offers.slice().sort((a, b) => -a.rating + b.rating);
  }
  return offers;
};


const Main = ({
  onSelectOffer,
  city,
  cityOffers,
  onHoverActiveCard,
  hoveredPlace,
  changeOptionSorting,
  optionSorting
}) => {
  const cityOffersResult = offersSortingByOption(cityOffers, optionSorting);
  const placesCount = cityOffersResult.length;
  const offersCoords = Array.from(cityOffersResult, (item) => {
    return [item.id, item.coordinates];
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
                {placesCount} places to stay in Amsterdam
              </b>
              <SortingOptionsWrapper
                onSelectOption={changeOptionSorting}
                optionSorting={optionSorting}
              />
              <OffersList
                cityOffers={cityOffersResult}
                onSelectOffer={onSelectOffer}
                onHoverActiveCard={onHoverActiveCard}
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
                hoveredPlace={hoveredPlace}
                offersCoords={offersCoords}
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
  changeOptionSorting: PropTypes.func,
  optionSorting: PropTypes.string,
  hoveredPlace: PropTypes.number,
  onHoverActiveCard: PropTypes.func,
  city: PropTypes.string,
  type: PropTypes.string,
  onSelectOffer: PropTypes.func,
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default Main;
