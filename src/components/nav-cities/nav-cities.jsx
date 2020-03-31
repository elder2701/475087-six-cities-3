import React, {memo} from "react";
import {ActionCreator} from "../../reducer/city/city.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCities} from "../../reducer/data/selectors.js";
import {getCity} from "../../reducer/city/selectors.js";

const classLink = (city, activeCity) =>
  city === activeCity
    ? `locations__item-link tabs__item tabs__item--active`
    : `locations__item-link tabs__item`;

const NavCities = ({onChangeCity, cities, activeCity}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className={classLink(city, activeCity)}
              href="#"
              onClick={() => {
                onChangeCity(city);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

NavCities.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  activeCity: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {NavCities};
export default connect(mapStateToProps, mapDispatchToProps)(memo(NavCities));
