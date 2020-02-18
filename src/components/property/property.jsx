import React from "react";
import NearOffersList from "../near-offers-list/near-offers-list.jsx";
import PropertyReviews from "../property-reviews/property-reviews.jsx";
import PropTypes from "prop-types";

const spanStyles = (rating) => {
  let calculatedWidth = rating * 20;
  return {width: `${calculatedWidth}%`};
};

const Property = ({
  mark,
  price,
  rating,
  name,
  allFigures,
  insideFeatures,
  insideOptions,
  description,
  user,
  avatar,
  status
}) => (
  <main className="page__main page__main--property">
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {allFigures.map((path, index) => (
            <div className="property__image-wrapper" key={index}>
              <img className="property__image" src={path} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {mark ? (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div className="property__name-wrapper">
            <h1 className="property__name">{name}</h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={spanStyles(rating)}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            {insideFeatures.map((feature, index) => (
              <li
                key={index}
                className="property__feature property__feature--entire"
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {insideOptions.map((option, index) => (
                <li className="property__inside-item" key={index}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div
                className={`property__avatar-wrapper property__avatar-wrapper${
                  status ? `--pro` : ``
                } user__avatar-wrapper`}
              >
                <img
                  className="property__avatar user__avatar"
                  src={avatar}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">{user}</span>
            </div>
            <div className="property__description">
              <p className="property__text">{description}</p>
            </div>
          </div>
          <PropertyReviews/>
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
    <NearOffersList />
  </main>
);
export default Property;

Property.propTypes = {
  mark: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  allFigures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  insideFeatures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  insideOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};
