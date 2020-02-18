import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Header from "../header/header.jsx";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOffer: null
    };
    this.onSelectOffer = this.onSelectOffer.bind(this);
  }

  onSelectOffer(selectedOffer) {
    this.setState({selectedOffer});
  }

  render() {
    const {placesCount, offers} = this.props;
    const {selectedOffer} = this.state;
    const offer = offers.find((item) => item.id === selectedOffer);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {offer ? (
              <Property {...offer} />
            ) : (
              <Main
                placesCount={placesCount}
                offers={offers}
                onSelectOffer={this.onSelectOffer}
              />
            )}
          </Route>
          <Route exact path="/dev-component">
            <Property {...offers[1]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        figurePreview: PropTypes.string.isRequired,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        allFigures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        insideFeatures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        insideOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        description: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};


export default App;
