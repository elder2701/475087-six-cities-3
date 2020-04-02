import React, {memo, Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const spanStyles = (rating) => {
  let calculatedWidth = Math.round(rating) * 20;
  return {width: `${calculatedWidth}%`};
};

const bookMarkClasses = (isFavorite) =>
  isFavorite
    ? `place-card__bookmark-button place-card__bookmark-button--active button`
    : `place-card__bookmark-button button`;

const Offer = ({offer, typeCard, onUpdateStatus}) => (
  <Fragment>
    {offer.isPremium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : null}
    <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img
          className="place-card__image"
          src={offer.previewImage}
          width="260"
          height="200"
          alt="Place image"
        />
      </a>
    </div>
    <div className={`${typeCard}__card-info place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={bookMarkClasses(offer.isFavorite)}
          type="button"
          onClick={() => {
            onUpdateStatus(offer.id, offer.isFavorite);
          }}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={spanStyles(offer.rating)}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link
          to={`/offer/${offer.id}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {offer.title}
        </Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </Fragment>
);

Offer.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  typeCard: PropTypes.string.isRequired
};

export {Offer};
export default memo(Offer);
