import React from "react";

const withOptionSorting = (Component) => {
  class WithOptionSorting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        optionSorting: `Popular`
      };
      this.handleOptionSortingChange = this.handleOptionSortingChange.bind(this);
    }

    handleOptionSortingChange(option) {
      this.setState({optionSorting: option});
    }

    render() {
      const {optionSorting} = this.state;

      return (
        <Component
          {...this.props}
          onChangeOptionSorting={this.handleOptionSortingChange}
          optionSorting={optionSorting}
        />
      );
    }
  }
  return WithOptionSorting;
};

export default withOptionSorting;
