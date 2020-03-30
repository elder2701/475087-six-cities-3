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

const Offer = ({offer, typeCard, updateStatus}) => (
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
            updateStatus(offer.id, offer.isFavorite);
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
          onClick={()=>{
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
  offer: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired,
  typeCard: PropTypes.string.isRequired,
};

export {Offer};
export default memo(Offer);
