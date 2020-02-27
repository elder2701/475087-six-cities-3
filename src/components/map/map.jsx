import React, {Component} from "react";
import PropTypes from "prop-types";
import l from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
    this.myMap = null;
  }

  componentDidMount() {
    const {offersCoords, hoveredPlace} = this.props;
    let markers = new l.LayerGroup();
    const city = [52.38333, 4.9];
    let icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const iconActive = l.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    l.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.myMap);
    offersCoords.forEach((coords) => {
      l.marker(coords[1], {icon}).addTo(markers);
    });
    l.control.layers({"markers": markers});
    this.myMap = l.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      layers: [markers]
    });
    this.myMap.setView(city, zoom);
  }

  componentDidUpdate() {
  }

  render() {
    const {name} = this.props;
    return (
      <section className={name} id="map"></section>
    );
  }
}

export default Map;

Map.propTypes = {
  offersCoords: PropTypes.array.isRequired,
  hoveredPlace: PropTypes.any,
  name: PropTypes.string.isRequired
};
