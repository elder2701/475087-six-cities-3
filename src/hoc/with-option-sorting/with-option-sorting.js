import React from 'react';

const withOptionSorting = (Component) => {
  class WithOptionSorting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        optionSorting: `Popular`,
      };
      this.changeOptionSorting = this.changeOptionSorting.bind(this);
    }

    changeOptionSorting(option) {
      this.setState({optionSorting: option});
    }

    render() {
      const {optionSorting} = this.state;

      return <Component {...this.props} changeOptionSorting={this.changeOptionSorting} optionSorting={optionSorting}/>;
    }
  }
  return WithOptionSorting;
};

export default withOptionSorting;
