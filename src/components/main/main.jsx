import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";

const tabCities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const Tabs = ({onCityHeaderClick}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {tabCities.map((city, index) => (
          <li className="locations__item" key={index}>
            <a
              className="locations__item-link tabs__item"
              href="#"
              onClick={onCityHeaderClick}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const Main = ({placesCount, offers, onSelectOffer, onCityHeaderClick = () => {}}) => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <Tabs onCityHeaderClick={onCityHeaderClick} />
    <div className="cities">
      <div className="cities__places-container container">
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
          <OffersList offers={offers} onSelectOffer={onSelectOffer}/>
        </section>
        <div className="cities__right-section">
          <Map offersCords = {Array.from(offers, (item)=> item.coordinates)}/>
        </div>
      </div>
    </div>
  </main>
);

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  onCityHeaderClick: PropTypes.func,
  onSelectOffer: PropTypes.func,
  offers: PropTypes.arrayOf(
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

Tabs.propTypes = {
  onCityHeaderClick: PropTypes.func.isRequired,
};

export default Main;
