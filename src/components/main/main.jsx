import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import NavCities from "../nav-cities/nav-cities.jsx";
import SortingOptions from "../sorting-options/sorting-options.jsx";
import Map from "../map/map.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      optionSorting: `Popular`,
      hoveredPlace: null
    };
    this.changeOptionSorting = this.changeOptionSorting.bind(this);
    this.onHoverActiveCard = this.onHoverActiveCard.bind(this);
  }

  changeOptionSorting(option) {
    this.setState({optionSorting: option});
  }

  offersSortingByOption(offers) {
    const {optionSorting} = this.state;

    switch (optionSorting) {
      case `Price: low to high`:
        return offers.slice().sort((a, b) => a.price - b.price);
      case `Price: high to low`:
        return offers.slice().sort((a, b) => -a.price + b.price);
      case `Top rated first`:
        return offers.slice().sort((a, b) => -a.rating + b.rating);
    }
    return offers;
  }

  onHoverActiveCard(id) {
    this.setState({hoveredPlace: id});
  }

  render() {
    const {onSelectOffer, city} = this.props;
    let {cityOffers} = this.props;
    const {hoveredPlace} = this.state;
    cityOffers = this.offersSortingByOption(cityOffers);
    const placesCount = cityOffers.length;
    const offersCoords = Array.from(cityOffers, (item) => {
      return [item.id, item.coordinates];
    });
    const cityPlaceContainerType = placesCount
      ? ``
      : `cities__places-container--empty`;
    const {optionSorting} = this.state;
    return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavCities />
        <div className="cities">
          <div
            className={`cities__places-container container ${cityPlaceContainerType}`}
          >
            {placesCount ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {placesCount} places to stay in Amsterdam
                </b>
                <SortingOptions
                  onSelectOption={this.changeOptionSorting}
                  optionSorting={optionSorting}
                />
                <OffersList
                  cityOffers={cityOffers}
                  onSelectOffer={onSelectOffer}
                  onHoverActiveCard={this.onHoverActiveCard}
                  type={`cities__places-list tabs__content`}
                />
              </section>
            ) : (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property availbale at the moment in
                    {city}
                  </p>
                </div>
              </section>
            )}
            <div className="cities__right-section">
              {placesCount ? (
                <Map
                  hoveredPlace={hoveredPlace}
                  offersCoords={offersCoords}
                  name={`cities__map`}
                />
              ) : (
                <section className="cities__map map"></section>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string,
  type: PropTypes.string,
  onSelectOffer: PropTypes.func,
  cityOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default Main;
