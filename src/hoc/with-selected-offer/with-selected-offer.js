import React from "react";

const withSelectedOffer = (Component) => {
  class WithSelectedOffer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOffer: null
      };
      this.handleOfferSelect = this.handleOfferSelect.bind(this);
    }

    handleOfferSelect(selectedOffer) {
      this.setState({selectedOffer});
    }

    render() {
      const {selectedOffer} = this.state;
      return (
        <Component
          {...this.props}
          onSelectOffer={this.handleOfferSelect}
          selectedOffer={selectedOffer}
        />
      );
    }
  }
  return WithSelectedOffer;
};

export default withSelectedOffer;
