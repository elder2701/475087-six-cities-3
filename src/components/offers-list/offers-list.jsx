import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

const OffersList = ({onHoverActiveCard, cityOffers, onSelectOffer, type}) => (
  <div className={`${type} places__list`}>
    {cityOffers.map((offer) => (
      <Offer
        offer={offer}
        key={offer.id}
        onHoverActiveCard={onHoverActiveCard}
        onSelectOffer={onSelectOffer}
      />
    ))}
  </div>
);

OffersList.propTypes = {
  onHoverActiveCard: PropTypes.func,
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onSelectOffer: PropTypes.func,
  type: PropTypes.string
};

export default OffersList;
