import React, {PureComponent} from "react";
import PropTypes, {number} from "prop-types";
import l from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = l.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    l.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(map);
    const {offersCoords} = this.props;
    offersCoords.forEach((coords) => l.marker(coords, {icon}).addTo(map));
  }

  render() {
    return (
      <section className="cities__map map" id="map"></section>
    );
  }
}

export default Map;

Map.propTypes = {
  offersCoords: PropTypes.arrayOf(PropTypes.arrayOf(number)).isRequired
};
