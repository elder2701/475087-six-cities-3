import React from "react";

const withSelectedOffer = (Component) => {
  class WithSelectedOffer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOffer: null
      };
      this.selectOffer = this.selectOffer.bind(this);
    }

    selectOffer(selectedOffer) {
      this.setState({selectedOffer});
    }

    render() {
      const {selectedOffer} = this.state;
      return (
        <Component
          {...this.props}
          selectOffer={this.selectOffer}
          selectedOffer={selectedOffer}
        />
      );
    }
  }
  return WithSelectedOffer;
};

export default withSelectedOffer;
