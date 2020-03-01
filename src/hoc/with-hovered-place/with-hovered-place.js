import React from 'react';


const withHoveredPlace = (Component) => {
  class WithHoveredPlace extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hoveredPlace: null
      };
      this.onHoverActiveCard = this.onHoverActiveCard.bind(this);
    }

    onHoverActiveCard(id) {
      this.setState({hoveredPlace: id});
    }

    render() {
      const {hoveredPlace} = this.state;

      return <Component {...this.props} onHoverActiveCard={this.onHoverActiveCard} hoveredPlace={hoveredPlace}/>;
    }
  }
  return WithHoveredPlace;
};

export default withHoveredPlace;
