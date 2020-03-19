import React, {memo} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/offer/offer.js";
import {OperationOffer} from "../../reducer/operation/operation.js";

const spanStyles = (rating) => {
  let calculatedWidth = Math.round(rating) * 20;
  return {width: `${calculatedWidth}%`};
};

const Offer = ({offer, onHoverActiveCard, handleSelectOffer}) => (
  <article
    className="cities__place-card place-card"
    onMouseOver={(evt) => {
      evt.preventDefault();
      onHoverActiveCard(offer.id);
    }}
    onMouseOut={(evt) => {
      evt.preventDefault();
      onHoverActiveCard(null);
    }}
  >
    {offer.is_premium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : null}
    <div className="cities__image-wrapper place-card__image-wrapper">
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
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className="place-card__bookmark-button place-card__bookmark-button--active button"
          type="button"
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
      <h2
        className="place-card__name"
        onClick={(evt) => {
          evt.preventDefault();
          handleSelectOffer(offer.id);
        }}
      >
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
  onHoverActiveCard: PropTypes.func,
  handleSelectOffer: PropTypes.func
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  handleSelectOffer(id) {
    dispatch(ActionCreator.setSelectedOffer(id));
    dispatch(OperationOffer.loadOfferComments(id));
    dispatch(OperationOffer.loadOffersAround(id));
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Offer));
