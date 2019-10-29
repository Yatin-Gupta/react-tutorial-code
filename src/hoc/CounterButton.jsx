import React from "react";
import withCounter from "./withCounter";

const CounterButton = props => {
  return (
    <div>
      <button onClick={() => props.incrementCounter()}>
        {props.name} Clicked {props.counter} times
      </button>
    </div>
  );
};

export default withCounter(CounterButton);
