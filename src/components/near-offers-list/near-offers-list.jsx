import React from 'react';
import {nearOffers} from "../../mock/offers.js";
import Offer from "../offer/offer.jsx";


const NearOffersList = () => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((nearOffer) => (
          <Offer
            offer={nearOffer}
            key={nearOffer.id}
            onHoverActiveCard={() => {}}
            onSelectOffers={()=>{}}
          />
        ))}
      </div>
    </section>
  </div>
);

export default NearOffersList;
