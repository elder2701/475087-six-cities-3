import React from "react";

const withSelectedOffer = (Component) => {
  class WithSelectedOffer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOffer: null
      };
      this.onSelectOffer = this.onSelectOffer.bind(this);
    }

    onSelectOffer(selectedOffer) {
      this.setState({selectedOffer});
    }

    render() {
      const {selectedOffer} = this.state;
      return (
        <Component
          {...this.props}
          onSelectOffer={this.onSelectOffer}
          selectedOffer={selectedOffer}
        />
      );
    }
  }
  return WithSelectedOffer;
};

export default withSelectedOffer;
