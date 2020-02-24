import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import NavCities from "../nav-cities/nav-cities.jsx";
import Map from "../map/map.jsx";

const Main = ({cityOffers, onSelectOffer, city}) => {
  const placesCount = cityOffers.length;
  const offersCoords = Array.from(cityOffers, (item) => item.coordinates);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
                {/* <!--
                <select class="places__sorting-type" id="places-sorting">
                  <option class="places__option" value="popular" selected="">Popular</option>
                  <option class="places__option" value="to-high">Price: low to high</option>
                  <option class="places__option" value="to-low">Price: high to low</option>
                  <option class="places__option" value="top-rated">Top rated first</option>
                </select>
                -->*/}
              </form>
              <OffersList
                cityOffers={cityOffers}
                onSelectOffer={onSelectOffer}
                type={`cities__places-list tabs__content`}
              />
            </section>
          ) : (
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property availbale at the moment in {city}
                </p>
              </div>
            </section>
          )}
          <div className="cities__right-section">
            {placesCount ? (
              <Map offersCoords={offersCoords} name={`cities__map`} />
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
  city: PropTypes.string,
  type: PropTypes.string,
  onCityHeaderClick: PropTypes.func,
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
