import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <h1>Portal</h1>
      </React.Fragment>,
      document.getElementById("portal-root")
    );
  }
}

export default Portal;
