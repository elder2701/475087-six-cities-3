import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import l from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.myMap = null;
    this.markers = null;
    this.icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.iconActive = l.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }

  initMapWithPinLayer(places) {
    const city = [52.38333, 4.9];
    const zoom = 12;
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
      l.marker(coords[1], {icon: this.icon})
    );
    this.initMapWithPinLayer(places);
  }

  componentDidUpdate() {
    const {offersCoords, selectedOffer} = this.props;
    this.markers.clearLayers();
    offersCoords.map((coords) => {
      l.marker(coords[1], {
        icon: coords[0] === selectedOffer ? this.iconActive : this.icon
      }).addTo(this.markers);
    });
  }

  render() {
    const {name} = this.props;
    return <section className={name} id="map"></section>;
  }
}

export default Map;

Map.propTypes = {
  offersCoords: PropTypes.array.isRequired,
  selectedOffer: PropTypes.any,
  name: PropTypes.string.isRequired
};
