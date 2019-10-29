import React from "react";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

function RenderProps() {
  return (
    <div>
      <Counter
        render={(counter, incrementCounter) => (
          <ClickCounter counter={counter} incrementCounter={incrementCounter} />
        )}
      />
      <Counter
        render={(counter, incrementCounter) => (
          <HoverCounter counter={counter} incrementCounter={incrementCounter} />
        )}
      />
    </div>
  );
}

export default RenderProps;
