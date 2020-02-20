import React from 'react';
import Offer from "../offer/offer.jsx";
import PropTypes from "prop-types";

const NearOffersList = ({places}) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((nearOffer) => (
          <Offer
            offer={nearOffer}
            key={nearOffer.id}
            onHoverActiveCard={() => {}}
            onSelectOffer={()=>{}}
          />
        ))}
      </div>
    </section>
  </div>
);

export default NearOffersList;

NearOffersList.propTypes = {
  places: PropTypes.array.isRequired
};
