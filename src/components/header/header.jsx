import React, {memo} from "react";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus, getUserInfo} from "../../reducer/user/selector.js";
import {OperationFavorites} from "../../reducer/operation/operation.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const Header = ({authorizationStatus, userInfo, loadFavorites}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link
            className="header__logo-link header__logo-link--active"
            to={AppRoute.ROOT}
          >
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="81"
              height="41"
            />
          </Link>
        </div>
        <nav className="header__nav">
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.MYLIST}
                  onClick={() => {
                    loadFavorites();
                  }}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {userInfo.email}
                  </span>
                </Link>
              </li>
            </ul>
          ) : (
            <Link to={AppRoute.LOGIN}>Sign in</Link>
          )}
        </nav>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(OperationFavorites.loadFavorites());
  }
});

export {Header};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  loadFavorites: PropTypes.func.isRequired
};
