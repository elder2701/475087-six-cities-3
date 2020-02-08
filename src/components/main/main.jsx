import React from "react";
import PropTypes from "prop-types";

const tabCities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const spanStyles = {
  width: `80%`
};

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

const PlaceCard = ({place}) => (
  <article className="cities__place-card place-card">
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src="img/room.jpg"
          width="260"
          height="200"
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;80</b>
          <span className="place-card__price-text">
            &#47;&nbsp;night
          </span>
        </div>
        <button
          className="place-card__bookmark-button place-card__bookmark-button--active button"
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            width="18"
            height="19"
          >
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={spanStyles}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{place}</a>
      </h2>
      <p className="place-card__type">Private room</p>
    </div>
  </article>);

const Main = ({placesCount, places, onCityHeaderClick = () => {}}) => (
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
          <div className="cities__places-list places__list tabs__content">
            {places.map((place, index) => (
              <PlaceCard place={place} key={index} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  </main>
);

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityHeaderClick: PropTypes.func
};

Tabs.propTypes = {
  onCityHeaderClick: PropTypes.func
};

PlaceCard.propTypes = {
  place: PropTypes.string.isRequired
};

export default Main;
