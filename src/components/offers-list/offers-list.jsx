import React, {memo} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";
import {connect} from "react-redux";
import {OperationFavorites} from "../../reducer/operation/operation.js";

const OffersList = ({
  onHoverActiveCard,
  cityOffers,
  type,
  onUpdateStatus
}) => (
  <div className={`${type} places__list`}>
    {cityOffers.map((offer) => (
      <article
        className="cities__place-card place-card"
        key={offer.id}
        onMouseOver={(evt) => {
          evt.preventDefault();
          onHoverActiveCard(offer.id);
        }}
        onMouseOut={(evt) => {
          evt.preventDefault();
          onHoverActiveCard(null);
        }}
      >
        <Offer
          offer={offer}
          typeCard={`cities`}
          onUpdateStatus={onUpdateStatus}
        />
      </article>
    ))}
  </div>
);

OffersList.propTypes = {
  onHoverActiveCard: PropTypes.func.isRequired,
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape({
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
        hostAvatarUrl: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  type: PropTypes.string.isRequired,
  onUpdateStatus: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onUpdateStatus(id, status) {
    dispatch(OperationFavorites.changeStatusFavorite(id, !status));
  }
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(memo(OffersList));
