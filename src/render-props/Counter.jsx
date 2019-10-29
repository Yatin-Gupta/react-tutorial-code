import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render() {
    console.log(this.state.counter);
    return (
      <React.Fragment>
        {this.props.render(this.state.counter, this.incrementCounter)}
      </React.Fragment>
    );
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };
}

export default Counter;
