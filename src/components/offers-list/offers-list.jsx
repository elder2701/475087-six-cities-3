import React, {memo} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";
import {connect} from "react-redux";
import {OperationFavorites} from "../../reducer/operation/operation.js";

const OffersList = ({hoverActiveCard, cityOffers, type, updateStatus}) => (
  <div className={`${type} places__list`}>
    {cityOffers.map((offer) => (
      <article
        className="cities__place-card place-card"
        key={offer.id}
        onMouseOver={(evt) => {
          evt.preventDefault();
          hoverActiveCard(offer.id);
        }}
        onMouseOut={(evt) => {
          evt.preventDefault();
          hoverActiveCard(null);
        }}
      >
        <Offer offer={offer} typeCard={`cities`} updateStatus={updateStatus} />
      </article>
    ))}
  </div>
);

OffersList.propTypes = {
  hoverActiveCard: PropTypes.func.isRequired,
  cityOffers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  updateStatus(id, status) {
    dispatch(OperationFavorites.changeStatusFavorite(id, !status));
  }
});

export {OffersList};

export default connect(mapStateToProps, mapDispatchToProps)(memo(OffersList));
