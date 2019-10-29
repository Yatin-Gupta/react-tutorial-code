import React from "react";

const HoverCounter = props => {
  return (
    <div>
      <h1
        onMouseOver={event => {
          props.incrementCounter();
        }}
      >
        Hovered {props.counter} times.
      </h1>
    </div>
  );
};

export default HoverCounter;
