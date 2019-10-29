import React from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentE extends React.Component {
  // static contextType = UserContext; We can comment ALPHA line and uncomment it. Either way it works.
  render() {
    return (
      <div>
        {/* Note here context is used, not contextType */}
        {this.context}
        <ComponentF />
      </div>
    );
  }
}

// Otherway of using context without using consumer, instead used contextType. But this works only with class component.
ComponentE.contextType = UserContext; // Line ALPHA

export default ComponentE;
