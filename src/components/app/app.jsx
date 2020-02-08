import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`];

const App = ({placesCount}) =>(
  <Main placesCount={placesCount} places={places} />
);

App.propTypes = {
  placesCount: PropTypes.number.isRequired
};


export default App;
