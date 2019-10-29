import React from "react";
import withCounter from "./withCounter";

const CounterHover = props => {
  return (
    <div>
      <h1
        onMouseOver={event => {
          props.incrementCounter();
        }}
      >
        Hovered {props.counter} times
      </h1>
    </div>
  );
};

export default withCounter(CounterHover);
