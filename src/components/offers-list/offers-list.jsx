import React, {memo} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";
import {connect} from "react-redux";
import {OperationFavorites} from "../../reducer/operation/operation.js";

const OffersList = ({onHoverActiveCard, cityOffers, type, onUpdateStatus}) => (
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
        <Offer offer={offer} typeCard={`cities`} onUpdateStatus={onUpdateStatus} />
      </article>
    ))}
  </div>
);

OffersList.propTypes = {
  onHoverActiveCard: PropTypes.func.isRequired,
  cityOffers: PropTypes.array.isRequired,
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
