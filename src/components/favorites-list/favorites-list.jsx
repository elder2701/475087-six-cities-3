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
    const {loadFavorites} = this.props;
    loadFavorites();
  }

  componentWillUnmount() {
    const {resetFavorites} = this.props;
    resetFavorites();
  }
  render() {
    const {favorites, updateStatus, selectCity} = this.props;
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
                            selectCity(city);
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
                            updateStatus={updateStatus}
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

const mapStateToProps = (state) => ({
  favorites: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(OperationFavorites.loadFavorites());
  },
  resetFavorites() {
    dispatch(FavoriteActionCreator.loadFavorites({}));
  },
  updateStatus(id, status) {
    dispatch(OperationFavorites.changeStatusAndUpdateFavorite(id, !status));
  },
  selectCity(city) {
    dispatch(CityActionCreator.changeCity(city));
  }
});

export {FavoritesList};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);

FavoritesList.propTypes = {
  favorites: PropTypes.object.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  resetFavorites: PropTypes.func.isRequired,
  updateStatus: PropTypes.func,
  selectCity: PropTypes.func.isRequired
};
