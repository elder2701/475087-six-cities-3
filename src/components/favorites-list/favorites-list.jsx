import React, {Component} from "react";
import PropTypes from "prop-types";
import {OperationFavorites} from "../../reducer/operation/operation.js";
import {getFavorites} from "../../reducer/favorite/selector.js";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {ActionCreator as FavoriteActionCreator} from "../../reducer/favorite/favorite.js";
import Offer from "../offer/offer.jsx";
import EmptyFavorite from "../empty-favorite/empty-favorite.jsx";
import {ActionCreator as CityActionCreator} from "../../reducer/city/city.js";

const setMainClasses = (empty) =>
  empty
    ? `page__main page__main--favorites`
    : `page__main page__main--favorites page__main--favorites-empty`;

class FavoritesList extends Component {
  componentDidMount() {
    const {onLoadFavorites} = this.props;
    onLoadFavorites();
  }

  componentWillUnmount() {
    const {onResetFavorites} = this.props;
    onResetFavorites();
  }
  render() {
    const {favorites, onUpdateStatus, onSelectCity} = this.props;
    const empty = Object.keys(favorites).length;
    return (
      <main className={setMainClasses(empty)}>
        <div className="page__favorites-container container">
          {empty ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(favorites).map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link
                          className="locations__item-link"
                          to={AppRoute.ROOT}
                          onClick={() => {
                            onSelectCity(city);
                          }}
                        >
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favorites[city].offers.map((offer) => (
                        <article
                          className="favorites__card place-card"
                          key={offer.id}
                        >
                          <Offer
                            offer={offer}
                            typeCard={`favorites`}
                            onUpdateStatus={onUpdateStatus}
                          />
                        </article>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <EmptyFavorite />
          )}
        </div>
      </main>
    );
  }
}

FavoritesList.propTypes = {
  favorites: PropTypes.objectOf(
      PropTypes.shape({
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          }).isRequired
        }).isRequired,
        offers: PropTypes.arrayOf(
            PropTypes.shape({
              city: PropTypes.shape({
                name: PropTypes.string.isRequired,
                location: PropTypes.shape({
                  latitude: PropTypes.number.isRequired,
                  longitude: PropTypes.number.isRequired,
                  zoom: PropTypes.number.isRequired
                }).isRequired
              }).isRequired,
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
        ).isRequired
      })
  ).isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
  onResetFavorites: PropTypes.func.isRequired,
  onUpdateStatus: PropTypes.func,
  onSelectCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(OperationFavorites.loadFavorites());
  },
  onResetFavorites() {
    dispatch(FavoriteActionCreator.loadFavorites({}));
  },
  onUpdateStatus(id, status) {
    dispatch(OperationFavorites.changeStatusAndUpdateFavorite(id, !status));
  },
  onSelectCity(city) {
    dispatch(CityActionCreator.changeCity(city));
  }
});

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
