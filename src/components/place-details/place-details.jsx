import React, {Component} from "react";
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
import {getAuthStatus} from "../../reducer/user/selector.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoute} from "../../const.js";
import history from "../../history.js";

const spanStyles = (rating) => {
  let calculatedWidth = Math.round(rating) * 20;
  return {width: `${calculatedWidth}%`};
};

const bookMarkClasses = (isFavorite) =>
  isFavorite
    ? `property__bookmark-button property__bookmark-button--active button`
    : `property__bookmark-button button`;

class PlaceDetails extends Component {
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
      onUpdateStatus,
      authStatus
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
      return [item.id, item.location.latitude, item.location.longitude];
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
                    if (AuthorizationStatus.NO_AUTH === authStatus) {
                      history.push(AppRoute.LOGIN);
                      return;
                    }
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

PlaceDetails.propTypes = {
  idOffer: PropTypes.string.isRequired,
  details: PropTypes.shape({
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
    hostAvatarUrl: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          "id": PropTypes.number.isRequired,
          "is_pro": PropTypes.bool.isRequired,
          "name": PropTypes.string.isRequired,
          "avatar_url": PropTypes.string.isRequired
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  selectedOffer: PropTypes.number,
  onUpdateOfferInfo: PropTypes.func.isRequired,
  onSelectOffer: PropTypes.func.isRequired,
  nearPlaces: PropTypes.arrayOf(
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
        hostAvatarUrl: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  cityInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
  onResetOfferInfo: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => ({
  nearPlaces: getNearOffersInfo(state),
  comments: getComments(state),
  cityInfo: getCityInfo(state),
  details: getSelectedOffer(state, props),
  authStatus: getAuthStatus(state)
});

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
