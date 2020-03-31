import React from "react";

const withOpen = (Component) => {
  class WithOpen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this._proccesingDocumentClick = this._proccesingDocumentClick.bind(this);
      this.handleMenuCloseOrOpen = this.handleMenuCloseOrOpen.bind(this);
      this.handleMenuClose = this.handleMenuClose.bind(this);
    }

    _proccesingDocumentClick() {
      this.setState({open: false});
      document.removeEventListener(`click`, this._proccesingDocumentClick);
    }

    handleMenuClose() {
      this.setState({open: false});
    }

    handleMenuCloseOrOpen() {
      this.setState((prevState) => ({open: !prevState.open}));
    }

    componentDidUpdate() {
      const {open} = this.state;
      if (open) {
        document.addEventListener(`click`, this._proccesingDocumentClick);
      }
    }

    render() {
      const {open} = this.state;

      return (
        <Component
          {...this.props}
          open={open}
          onCloseOrOpen={this.handleMenuCloseOrOpen}
          onClose={this.handleMenuClose}
        />
      );
    }
  }
  return WithOpen;
};

export default withOpen;
