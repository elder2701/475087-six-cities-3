import React from "react";

const withOpen = (Component) => {
  class WithOpen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.proccesingDocumentClick = this.proccesingDocumentClick.bind(this);
      this.handleCloseOrOpen = this.handleCloseOrOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    proccesingDocumentClick() {
      this.setState({open: false});
      document.removeEventListener(`click`, this.proccesingDocumentClick);
    }

    handleClose() {
      this.setState({open: false});
    }

    handleCloseOrOpen() {
      this.setState((prevState) => ({open: !prevState.open}));
    }

    componentDidUpdate() {
      const {open} = this.state;
      if (open) {
        document.addEventListener(`click`, this.proccesingDocumentClick);
      }
    }

    render() {
      const {open} = this.state;

      return (
        <Component
          {...this.props}
          open={open}
          handleCloseOrOpen={this.handleCloseOrOpen}
          handleClose={this.handleClose}
        />
      );
    }
  }
  return WithOpen;
};

export default withOpen;
