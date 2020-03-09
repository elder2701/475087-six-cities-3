import React, {memo} from "react";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus, getUserInfo} from "../../reducer/user/selector.js";

const Header = ({authorizationStatus, userInfo}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="81"
              height="41"
            />
          </a>
        </div>
        <nav className="header__nav">
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {userInfo.email}
                  </span>
                </a>
              </li>
            </ul>
          ) : (
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign in
            </a>
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

export default connect(mapStateToProps)(memo(Header));

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired
};
