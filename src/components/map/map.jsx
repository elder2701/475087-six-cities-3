import React, {PureComponent} from "react";
import PropTypes, {number} from "prop-types";
import l from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.refMap = React.createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = l.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = l.map(this.refMap.current.id, {
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
    const {offersCords} = this.props;
    offersCords.forEach((coords) => l.marker(coords, {icon}).addTo(map));
  }

  render() {
    return (
      <section className="cities__map map" id="map" ref={this.refMap}></section>
    );
  }
}

export default Map;

Map.propTypes = {
  offersCords: PropTypes.arrayOf(PropTypes.arrayOf(number)).isRequired
};
