import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import l from "leaflet";

const Size = {
  ICON_SIZE: `ICON_SIZE`
};

const getSize = (iconSize) => {
  switch (iconSize) {
    case Size.ICON_SIZE:
      return [30, 30];
    default:
      return [];
  }
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.myMap = null;
    this.markers = null;
    this.icon = l.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: getSize(Size.ICON_SIZE)
    });
    this.iconActive = l.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: getSize(Size.ICON_SIZE)
    });
  }

  initMapWithPinLayer(places) {
    const {cityLocation} = this.props;
    const {latitude, longitude, zoom} = cityLocation;
    const city = [latitude, longitude];
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
    l.control.layers({markers: this.markers});
  }

  componentDidMount() {
    const {offersCoords} = this.props;
    const places = Array.from(offersCoords, (coords) =>
      l.marker([coords[1], coords[2]], {icon: this.icon})
    );
    this.initMapWithPinLayer(places);
  }

  componentDidUpdate() {
    const {offersCoords, selectedOffer} = this.props;
    const {cityLocation} = this.props;
    const {latitude, longitude, zoom} = cityLocation;
    const city = [latitude, longitude];
    this.myMap.setView(city, zoom);
    this.markers.clearLayers();
    offersCoords.map((coords) => {
      const placeCoords = [coords[1], coords[2]];
      l.marker(placeCoords, {
        icon: coords[0] === selectedOffer ? this.iconActive : this.icon
      }).addTo(this.markers);
    });
  }

  render() {
    const {name} = this.props;
    return <section className={name + ` map`} id="map"></section>;
  }
}

Map.propTypes = {
  offersCoords: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ).isRequired,
  selectedOffer: PropTypes.number,
  name: PropTypes.string.isRequired,
  cityLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }).isRequired
};

export default Map;
