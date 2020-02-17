import React, {Fragment} from "react";
import Main from "../main/main.jsx";
import Header from "../header/header.jsx";
import PropTypes from 'prop-types';

const App = ({placesCount, offers}) => (
  <Fragment>
    <Header />
    <Main placesCount={placesCount} offers={offers} />
  </Fragment>
);

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        figure: PropTypes.string.isRequired,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};


export default App;
