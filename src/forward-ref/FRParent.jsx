import React, { Component } from "react";
import FRInput from "./FRInput";
import FRInput2 from "./FRInput2";

// Shortcut to create complete react component is rce.
// Shortcut to create react constructor is rconst

class FRParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.emailRef = null;
    this.addrRef = null;
  }

  componentDidMount() {
    console.log(this.emailRef);
    console.log(this.addrRef);
  }

  render() {
    console.log("Demo Forward Ref");
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button
          onClick={event => {
            event.preventDefault();
            this.inputRef.current.focus();
          }}
        >
          Focus on button
        </button>
        <FRInput2 setRef={this.setRef} />
      </div>
    );
  }

  setRef = (refName, refValue) => {
    this[refName] = refValue;
  };
}

export default FRParent;
