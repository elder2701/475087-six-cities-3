import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHoverActiveCard, cityOffers, onSelectOffer, type} = this.props;
    return (
      <div className={`${type} places__list`}>
        {cityOffers.map((offer) => (
          <Offer
            offer={offer}
            key={offer.id}
            onHoverActiveCard={()=>{
              onHoverActiveCard(offer.id);
            }}
            onSelectOffer = {onSelectOffer}
          />
        ))}
      </div>
    );
  }
}

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

