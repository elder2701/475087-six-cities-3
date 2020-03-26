import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {OperationFavorites} from "../../reducer/operation/operation.js";
import {getFavorites} from "../../reducer/favorite/selector.js";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {ActionCreator} from "../../reducer/favorite/favorite.js";
import Offer from "../offer/offer.jsx";

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
    const {favorites, updateStatus} = this.props;
    return (
      <Fragment>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
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
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.ROOT}>
            <img
              className="footer__logo"
              src="/img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      </Fragment>
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
    dispatch(ActionCreator.loadFavorites([]));
  },
  updateStatus(id, status) {
    dispatch(OperationFavorites.changeStatusAndUpdateFavorite(id, !status));
  }
});

export {FavoritesList};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);

FavoritesList.propTypes = {
  favorites: PropTypes.object.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  resetFavorites: PropTypes.func.isRequired,
  updateStatus: PropTypes.func
};
