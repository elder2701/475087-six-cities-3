import React, {memo} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

const OffersList = ({onHoverActiveCard, cityOffers, handleSelectOffer, type}) => (
  <div className={`${type} places__list`}>
    {cityOffers.map((offer) => (
      <Offer
        offer={offer}
        key={offer.id}
        onHoverActiveCard={onHoverActiveCard}
        handleSelectOffer={handleSelectOffer}
      />
    ))}
  </div>
);

OffersList.propTypes = {
  onHoverActiveCard: PropTypes.func,
  cityOffers: PropTypes.array.isRequired,
  handleSelectOffer: PropTypes.func,
  type: PropTypes.string
};

export default memo(OffersList);
