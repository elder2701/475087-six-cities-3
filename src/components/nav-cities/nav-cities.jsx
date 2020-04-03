import React, {memo} from "react";
import {ActionCreator} from "../../reducer/city/city.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCities} from "../../reducer/data/selectors.js";
import {getCity} from "../../reducer/city/selectors.js";

const NavCities = ({onChangeCity, cities, activeCity}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className={`locations__item-link tabs__item ${
                city === activeCity ? `tabs__item--active` : ``
              }`}
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
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
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
