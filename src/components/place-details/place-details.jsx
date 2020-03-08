import React from "react";
import PlaceReviews from "../place-reviews/place-reviews.jsx";
import PropTypes from "prop-types";

const spanStyles = (rating) => {
  let calculatedWidth = rating * 20;
  return {width: `${calculatedWidth}%`};
};

const PlaceDetails = ({
  isPremium,
  price,
  rating,
  hostIsPro,
  hostName,
  hostAvatarUrl,
  title,
  type,
  maxAdults,
  bedrooms,
  images,
  goods,
  description,
}) => (
  <main className="page__main page__main--property">
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.map((path, index) => (
            <div className="property__image-wrapper" key={index}>
              <img className="property__image" src={path} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium ? (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
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
            <span className="property__rating-value rating__value">
              {rating}
            </span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((option, index) => (
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
                  hostIsPro ? `--pro` : ``
                } user__avatar-wrapper`}
              >
                <img
                  className="property__avatar user__avatar"
                  src={hostAvatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">{hostName}</span>
            </div>
            <div className="property__description">
              <p className="property__text">{description}</p>
            </div>
          </div>
          <PlaceReviews comments={[]} />
        </div>
      </div>
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
      </section>
    </div>
  </main>
);

export default PlaceDetails;

PlaceDetails.propTypes = {
  selectedOffer: PropTypes.number,
  handleSelectOffer: PropTypes.func,
  onSelectOffer: PropTypes.func,
  price: PropTypes.number,
  rating: PropTypes.number,
  hostName: PropTypes.string,
  description: PropTypes.string,
  hostAvatarUrl: PropTypes.string,
  comments: PropTypes.array,
  nearPlaces: PropTypes.array,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  hostIsPro: PropTypes.bool,
  goods: PropTypes.array,
  images: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
  maxAdults: PropTypes.number,
  bedrooms: PropTypes.number
};
