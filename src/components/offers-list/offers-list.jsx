import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this.onHoverActiveCard = this.onHoverActiveCard.bind(this);
  }

  onHoverActiveCard(activeCard) {
    this.setState({activeCard});
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <Offer
            offer={offer}
            key={offer.id}
            onHoverActiveCard={this.onHoverActiveCard}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        figure: PropTypes.string.isRequired,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default OffersList;

