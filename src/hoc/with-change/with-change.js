import React from "react";

const withChange = (Component) => {
  class WithChange extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ``,
        text: ``
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }

    handleInputChange(value) {
      this.setState({value});
    }

    handleTextInputChange(text) {
      this.setState({text});
    }

    render() {
      const {value, text} = this.state;
      return (
        <Component
          {...this.props}
          onChange={this.handleInputChange}
          onChangeText={this.handleTextInputChange}
          value={value}
          text={text}
        />
      );
    }
  }
  return WithChange;
};

export default withChange;
