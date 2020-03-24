import React, {memo} from "react";
import PropTypes from "prop-types";
import Favorite from "../favorite/favorite.jsx";
import {OperationFavorites} from "../../reducer/operation/operation.js";
import {getFavorites} from "../../reducer/favorite/selector.js";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const FavoritesList = ({favorites, updateFavoritesWithStaus}) => (
  <div className="page__favorites-container container">
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favorites).map((city) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {favorites[city].offers.map((offer) => (
                <Favorite
                  key={offer.id}
                  favorites={offer}
                  updateStatus={updateFavoritesWithStaus}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const mapStateToProps = (state) => ({
  favorites: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateFavoritesWithStaus(id, status) {
    dispatch(OperationFavorites.changeStatusAndUpdateFavorite(id, status));
  }
});

export {FavoritesList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(FavoritesList));

FavoritesList.propTypes = {
  favorites: PropTypes.object.isRequired,
  updateFavoritesWithStaus: PropTypes.func.isRequired
};
