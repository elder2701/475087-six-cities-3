import React from "react";

const withChange = (Component) => {
  class WithChange extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ``,
        text: ``
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChange(value) {
      this.setState({value});
    }

    handleChangeText(text) {
      this.setState({text});
    }

    render() {
      const {value, text} = this.state;
      return (
        <Component
          {...this.props}
          handleChange={this.handleChange}
          handleChangeText={this.handleChangeText}
          value={value}
          text={text}
        />
      );
    }
  }
  return WithChange;
};

export default withChange;
