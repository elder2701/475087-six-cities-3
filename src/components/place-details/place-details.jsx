import React, {PureComponent} from "react";
import OffersList from "../offers-list/offers-list.jsx";
import PlaceReviews from "../place-reviews/place-reviews.jsx";
import Map from "../map/map.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  getNearOffersInfo,
  getComments,
  getSelectedOffer
} from "../../reducer/offer/selectors.js";
import {getCityInfo} from "../../reducer/data/selectors.js";
import {OperationFavorites} from "../../reducer/operation/operation.js";
import {OperationOffer} from "../../reducer/operation/operation.js";
import {ActionCreator} from "../../reducer/offer/offer.js";

const spanStyles = (rating) => {
  let calculatedWidth = Math.round(rating) * 20;
  return {width: `${calculatedWidth}%`};
};

const bookMarkClasses = (isFavorite) =>
  isFavorite
    ? `property__bookmark-button property__bookmark-button--active button`
    : `property__bookmark-button button`;

class PlaceDetails extends PureComponent {
  componentDidMount() {
    const {idOffer, onUpdateOfferInfo} = this.props;
    onUpdateOfferInfo(+idOffer);
  }

  componentWillUnmount() {
    const {onResetOfferInfo} = this.props;
    onResetOfferInfo();
  }

  render() {
    const {
      idOffer,
      selectedOffer,
      onSelectOffer,
      details,
      nearPlaces,
      comments,
      cityInfo,
      onUpdateStatus
    } = this.props;
    const {
      isFavorite,
      isPremium,
      price,
      rating,
      hostIsPro,
      hostName,
      hostAvatarUrl,
      title,
      type,
      maxAdults,
      bedrooms,
      images,
      goods,
      description
    } = details;
    const {location} = cityInfo;
    const offersCoords = Array.from(nearPlaces, (item) => {
      return [item.id, item.location];
    });
    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((path, index) => (
                <div className="property__image-wrapper" key={index}>
                  <img
                    className="property__image"
                    src={path}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={bookMarkClasses(isFavorite)}
                  type="button"
                  onClick={() => {
                    onUpdateStatus(idOffer, !isFavorite);
                  }}
                >
                  <svg
                    className="property__bookmark-icon place-card__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={spanStyles(rating)}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((option, index) => (
                    <li className="property__inside-item" key={index}>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`property__avatar-wrapper property__avatar-wrapper${
                      hostIsPro ? `--pro` : ``
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={`/${hostAvatarUrl}`}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{hostName}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <PlaceReviews comments={comments} selectedId={+idOffer} />
            </div>
          </div>
          {offersCoords ? (
            <Map
              selectedOffer={selectedOffer}
              offersCoords={offersCoords}
              cityLocation={location}
              name={`property__map`}
            />
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList
              cityOffers={nearPlaces}
              onHoverActiveCard={onSelectOffer}
              type={`near-places__list`}
            />
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  nearPlaces: getNearOffersInfo(state),
  comments: getComments(state),
  cityInfo: getCityInfo(state),
  details: getSelectedOffer(state, props)
});

PlaceDetails.propTypes = {
  idOffer: PropTypes.string.isRequired,
  details: PropTypes.shape({
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hostAvatarUrl: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    hostIsPro: PropTypes.bool.isRequired,
    goods: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxAdults: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  comments: PropTypes.array.isRequired,
  selectedOffer: PropTypes.number,
  onUpdateOfferInfo: PropTypes.func.isRequired,
  onSelectOffer: PropTypes.func.isRequired,
  nearPlaces: PropTypes.array.isRequired,
  cityInfo: PropTypes.object.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onResetOfferInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateStatus(id, status) {
    dispatch(OperationFavorites.changeStatusFavorite(id, status));
  },
  onUpdateOfferInfo(id) {
    dispatch(OperationOffer.loadOfferComments(id));
    dispatch(OperationOffer.loadOffersAround(id));
  },
  onResetOfferInfo() {
    dispatch(ActionCreator.loadOfferComments([]));
    dispatch(ActionCreator.loadOffersAround([]));
  }
});

export {PlaceDetails};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
