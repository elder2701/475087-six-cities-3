import React from "react";
import PropTypes from "prop-types";

const spanStyles = (rating) => {
  let calculatedWidth = Math.round(rating) * 20;
  return {width: `${calculatedWidth}%`};
};

const bookMarkClasses = (isFavorite) =>
  isFavorite
    ? `place-card__bookmark-button place-card__bookmark-button--active button`
    : `place-card__bookmark-button button`;

const Favorite = ({favorites, updateStatus}) => {
  return (
    <article className="favorites__card place-card">
      {favorites.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={favorites.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favorites.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={bookMarkClasses(favorites.isFavorite)}
            type="button"
            onClick={() => updateStatus(favorites.id, !favorites.isFavorite)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={spanStyles(favorites.rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{favorites.title}</a>
        </h2>
        <p className="place-card__type">{favorites.type}</p>
      </div>
    </article>
  );
};

export default Favorite;

Favorite.propTypes = {
  favorites: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired
};
