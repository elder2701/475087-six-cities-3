import React, {memo} from "react";
import {ActionCreator} from "../../reducer/reducer.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCities} from "../../reducer/reducer.js";

const NavCities = ({onChangeCity, cities}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className="locations__item-link tabs__item"
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

const mapStateToProps = (state) => ({
  cities: getCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

NavCities.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

export {NavCities};
export default connect(mapStateToProps, mapDispatchToProps)(memo(NavCities));
