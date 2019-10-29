import React from "react";

const ClickCounter = props => {
  return (
    <div>
      <button
        onClick={event => {
          props.incrementCounter();
        }}
      >
        Clicked {props.counter} times.
      </button>
    </div>
  );
};

export default ClickCounter;
