import React from "react";
import Main from "../main/main";
import PropTypes from 'prop-types';

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`];

class App extends React.Component {
  render() {
    const {placeCount} = this.props;
    return <Main placeCount={placeCount} places={places} />;
  }
}

App.propTypes = {
  placeCount: PropTypes.number.isRequired
};


export default App;
