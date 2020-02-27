import React, {Component} from "react";
import PropTypes from "prop-types";
import l from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
    this.myMap = null;
    this.markers = null;
  }

  componentDidMount() {
    const {offersCoords} = this.props;
    const city = [52.38333, 4.9];
    let icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const places = Array.from(offersCoords, (coords) =>
      l.marker(coords[1], {icon}));
    this.markers = l.layerGroup(places);
    this.myMap = l.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      layers: [this.markers]
    });
    this.myMap.setView(city, zoom);
    l.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.myMap);
    l.control.layers({"markers": this.markers});
  }

  componentDidUpdate() {
    const {offersCoords, hoveredPlace} = this.props;
    let icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const iconActive = l.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this.markers.clearLayers();
    const places = Array.from(offersCoords, (coords) =>{
      if (coords[0] === hoveredPlace) {
        icon = iconActive;
      }
      return l.marker(coords[1], {icon});
    });
    this.markers = l.layerGroup(places);
    l.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this.myMap);
    l.control.layers({"markers": this.markers});

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
