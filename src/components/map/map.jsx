import React, {PureComponent} from "react";
import PropTypes, {number} from "prop-types";
import l from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    let map = l.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    l.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(map);
    const {offersCoords} = this.props;
    offersCoords.forEach((coords) => l.marker(coords, {icon}).addTo(map));
    this.setState({map});
  }

  componentWillUnmount() {
    this.setState({map: null});
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
  offersCoords: PropTypes.arrayOf(PropTypes.arrayOf(number)).isRequired,
  name: PropTypes.string.isRequired
};
