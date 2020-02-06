import React from "react";
import Main from "../main/main";

class App extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { placeCount } = this.props;
    return <Main placeCount={placeCount} />;
  }
}

export default App;
